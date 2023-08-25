'use client'
import { Button, Input, YStack, H1, Paragraph, Stack, H3, Label, XStack , Separator, RadioGroup} from 'tamagui'
import { useState } from 'react'

export default function KidStories({}) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('female')
  return (
    <Stack  p={20} pt={30} bg='$gray1' ai='center' flex={1} >
      <H1>Custom Story Generator</H1>
      <Paragraph mb={40} col="$gray9" ta="center">Generate a custom, short and teachable story for your little ones, tailored to your specific needs.</Paragraph>
      <YStack gap={20} maw={800} bg='$gray2' br={20} p={10} px={60} ai='center'  boc='$blue4' bw={1}>
        <H3 fow='100' mt={20} fos={39} >What is your child&apos;s name?</H3>
        <YStack space={0} >
          <Label fow='100' col={'$gray9'}  htmlFor="name">First Name: </Label>
          <Input fow='600' col='$gray9' fos={26} size="$7" placeholderTextColor='$green7' theme='green' placeholder="Enter child's first name" borderWidth={2} value={name} onChangeText={text => setName(text)} /> 
        </YStack>
       <Separator alignSelf="stretch" my={20}  />
        <H3 fow='100' fos={39} >Select Gender</H3>
        <RadioGroup value={gender} size="$4" miw={350} name='form' onValueChange={value => setGender(value)} >
          <XStack gap={10} ai='center'  p={10} px={20} bw={2} boc={ (gender==='female') ? '$blue7' : '$blue4'} br={20} onPress={()=>setGender('female')}>
            <RadioGroup.Item value="female" id="femaleChild">
              <RadioGroup.Indicator />
             </RadioGroup.Item>
            <Label fos={20} fow={300} col={'$pink9'}>👧 Female Child</Label>
          </XStack>   
          <XStack gap={10} ai='center' mt={15}  p={10} px={20} bw={2} boc={(gender==='male') ? '$blue7' : '$blue4'} br={20} onPress={()=>setGender('male')} >
            <RadioGroup.Item value="male" id="maleChild">
              <RadioGroup.Indicator />
            </RadioGroup.Item>
            <Label fos={20} fow={300} col={'$blue9'}>👦 Male Child</Label>
          </XStack>
        </RadioGroup>
        <Separator alignSelf="stretch" my={20}  />
        <H3 fow='100' fos={39} >How old is the child?</H3>
      </YStack>
      {/* <Button theme='green'   >Button</Button>
      <Input size="$4" theme='blue' borderWidth={2} value={value} onChangeText={text => setValue        (text)} /> */}
    </Stack>
  

  )
}

