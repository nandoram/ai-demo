'use client'
import { Button, Input, YStack, H1, Paragraph, Stack, H3, Label, XStack , Separator, RadioGroup, Select, Slider} from 'tamagui'
import { useState, useMemo , useRef, useEffect} from 'react'
import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import generateAndAddStory from './generateAndAddStory'
import Spinner from '../../../app/components/Spinner';
import Lottie from 'react-lottie'
import animationData from "/public/confetti.json";
import { useRouter } from 'next/navigation'

export default function KidStories({}) {
  const inputNameRef = useRef(null);
  const questionsEndRef = useRef(null)
  const firstRender = useRef(true);
  const router = useRouter()

  useEffect(() => {
    inputNameRef.current?.focus();
  }, []);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('none');
  const [age, setAge] = useState([3]);
  const [category, setCategory] = useState('Bedtime');
  const [lesson, setLesson] = useState('');
  const [error, setError] = useState('');
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    scrollToBottom();
  }, [story]);
  const scrollToBottom = () => {
    questionsEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  const handleButtonPress = async () => {
    if(name.length < 1) return setError("Must enter child's name")
    if(lesson.length < 1) return setError("Must enter lesson")
    if (name.length > 20) return setError("Name must be less than 20 characters")
    if (lesson.length > 100) return setError("Lesson must be less than 100 characters")
    setError('');

    const answers = {name, lesson, age: age[0], gender, category}
    setLoading(true);
    const data = await generateAndAddStory(answers)
    if (data.data){
      setStory(data.data);
      setLoading(false);
      setError('');

    }
    if (data.error){
      setError(data.error);
      setLoading(false);
    }
    console.log(data)
  }
  return (
    <Stack  p={20} pt={30} bg='$gray1' ai='center' flex={1} >
      <H1>Short Story Generator</H1>
      <Paragraph mb={40} col="$gray9" ta="center">Generate a custom, short and teachable story for your little ones, tailored to your specific needs.</Paragraph>
      <YStack gap={20} maw={800} bg='$gray2' br={20} p={10} px={60} ai='center'  boc='$blue4' bw={1}>
        <H3 fow='100' mt={20} fos={39} >What is the child&apos;s name?</H3>
        <YStack space={0} >
          <Label fow='100' col={'$gray9'}  htmlFor="name">First Name: </Label>
          <Input ref={inputNameRef} fow='600' bg='$green1'fos={26} size="$7" placeholderTextColor='$green7' theme='green' placeholder="Enter child's first name" borderWidth={2} value={name} onChangeText={text => setName(text)} /> 
        </YStack>
       <Separator alignSelf="stretch" my={20}  />
        <H3 fow='100' fos={39} >Select gender bias</H3>
        <RadioGroup value={gender} size="$4" miw={350} name='form' onValueChange={value => setGender(value)} >
        
          <XStack gap={10} ai='center' p={10} px={20} bw={2} boc={ (gender==='female') ? '$blue7' : '$blue4'} br={20} onPress={()=>setGender('female')}>
            <RadioGroup.Item value="female" id="femaleChild">
              <RadioGroup.Indicator />
             </RadioGroup.Item>
            <Label fos={20} fow={300} col={'$pink9'}>👧 Girl biased story</Label>
          </XStack>   
          <XStack gap={10} ai='center' mt={15}  p={10} px={20} bw={2} boc={(gender==='male') ? '$blue7' : '$blue4'} br={20} onPress={()=>setGender('male')} >
            <RadioGroup.Item value="male" id="maleChild">
              <RadioGroup.Indicator />
            </RadioGroup.Item>
            <Label fos={20} fow={300} col={'$blue9'}>👦 Boy biased story</Label>
          </XStack>
          <XStack gap={10} ai='center' mt={15}  p={10} px={20} bw={2} boc={ (gender==='none') ? '$blue7' : '$blue4'} br={20} onPress={()=>setGender('none')}>
            <RadioGroup.Item value="none" id="noGenderChild">
              <RadioGroup.Indicator />
             </RadioGroup.Item>
            <Label fos={20} fow={300} col={'$red9'}>🚫 No gender bias</Label>
          </XStack>
        </RadioGroup>
        <Separator alignSelf="stretch" my={20}  />
        <H3 fow='100' fos={39} >How old is the child?</H3>
        <Label fow='900' fos={55} lineHeight={18} mt={20}  htmlFor="age">{age}</Label>
        <Label fow='100' col={'$gray9'} p={0} m={0} lineHeight={18} mb={40} fos={18} htmlFor="age">years</Label>
        <Slider theme='purple' size="$4" width={300} mb={20} defaultValue={age} max={12} min={1} onValueChange={setAge} step={1}>
          <Slider.Track>
            <Slider.TrackActive />
          </Slider.Track>
          <Slider.Thumb bg='$purple8' circular index={0} />
        </Slider>
        <Separator alignSelf="stretch" my={20}  />
        <H3 fow='100' mb={10} fos={39} >Select story category</H3>
        <Select  size={'$6'} defaultValue={category} value={category} onValueChange={setCategory}  >
          <Select.Trigger iconAfter={ChevronDown} borderRadius={20} boc="$green6" borderWidth={2} bg="$green1" >
            <Select.Value fos={24} col="$green7" fow="900" placeholder="General" />
          </Select.Trigger>
          <Select.Content>
            <Select.ScrollUpButton />
            <Select.Viewport>
            <Select.Group>
            <Select.Label>Story Categories</Select.Label>
            {/* for longer lists memoizing these is useful */}
            {useMemo(
              () =>
                items.map((item, i) => {
                  return (
                    <Select.Item
                      index={i}
                      key={item.name}
                      value={item.name}
                    >
                      <Select.ItemText>{item.name}</Select.ItemText>
                      <Select.ItemIndicator marginLeft="auto">
                        <Check size={16} />
                      </Select.ItemIndicator>
                    </Select.Item>
                  )
                }),
              []
            )}
          </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton />
          </Select.Content>
        </Select>
        <Separator alignSelf="stretch" my={20}  />
        <H3 fow='100' fos={39} >What is the lesson to learn?</H3>
        <YStack space={0} mb={20} >
          <Label fow='100' col={'$gray9'}  htmlFor="name">eg. why playing on the road is dangerous </Label>
          <Input fow='600' bg='$blue1'fos={26} size="$7" placeholderTextColor='$blue7' theme='blue' placeholder="Enter lesson " borderWidth={2} value={lesson} onChangeText={text => setLesson(text)} /> 
        </YStack>
        {error && <Paragraph mt={20} col="$red9" ta="center">{error}</Paragraph>}

        <Button disabled={loading || story.length > 0} onPress={handleButtonPress} size="$6" fow="900" theme='purple' bg={story.length > 0 ? "$gray8" : "$purple6"}>{loading && <Spinner/> } {loading ? 'Generating...' : 'CREATE STORY'}</Button>
        <Button chromeless onPress={() => router.push('/demos/stories/view-all')}  >View all</Button>
      </YStack>
      {story && <YStack gap={20} mt={40} maw={800} bg='$gray2' br={20} p={10} px={60} ai='center'  boc='$blue4' bw={1}>
        <Stack position='absolute' zIndex={0} width={500} height={200} backgroundColor='$black'>
          <Lottie options={defaultOptions} width={500} style={{position:'absolute'}} />
        </Stack>
        <H1 ref={questionsEndRef} >Story Time!</H1>
        <Separator alignSelf="stretch" mb={20}  />
        <Paragraph fow='100' fos={16} lh={32}>{story}</Paragraph>
      </YStack>}
   
    </Stack>
  

  )
}

const items = [
  { name: 'Bedtime' },
  { name: 'Moral' },
  { name: 'Adventure' },
  { name: 'Mystery' },
  { name: 'Science Fiction' },
  { name: 'Funny' },
  { name: 'Poetic' },
]

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};