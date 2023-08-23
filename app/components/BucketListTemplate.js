'use client'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState, useEffect, useRef } from 'react';
import { questions } from '../demos/bucketlist/questionsData';
import Lottie from "react-lottie";
import Spinner from './Spinner';
import animationData from "/public/confetti.json";
import Link from 'next/link';

export default function BucketlistTemplate({}) { 
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  const [questionsVal, setQuestionsVal] = useState({adventure: '5', social: '5', nature: '5', creativity: '5', cultural: '5', relaxation: '5', learning: '5', thrift: '5', physical: '5', planning: '5', food: '5', historical: '5', music: '5', technology: '5', family: '5'})
  const [bucketList, setBucketList] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const questionsEndRef = useRef(null)
  const  firstRender = useRef(true);

  useEffect(() => {
    setBucketList('');
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    scrollToBottom();
  }, [bucketList]);

  const setValues = (val, type) => {
    setQuestionsVal({...questionsVal, [type]: val})
  }
  const renderQuestions = () => {
    return questions.map((data, i) => <div key={i} className="mb-16">
    <h3 className="mb-2 text-lg font-semibold leading-6 text-gray-900">
    {data.title}
    </h3>
    <p className="pb-5">{data.content}</p>
    <Slider min={10} handleStyle={{borderColor:"#638ccd",}} activeDotStyle={{borderColor:"#9bb5ff"}} trackStyle={{ backgroundColor:'#638ccd'}} defaultValue={50} marks={{ 10: 1, 20: 2, 30: 3, 40: 4, 50: 5, 60: 6, 70: 7, 80: 8, 90: 9, 100: 10 }} step={null} onChange={(val)=>setValues(val.toString().slice(0, -1), data.type)} />
  </div>)
  }
  
  const renderBucketList = () => {
    const filterWord = /bucket|Bucket/;
    if (!(Array.isArray(bucketList)) && bucketList.length > 1) return  <li  className="py-8 pl-2 text-lg font-normal leading-6 text-gray-900">
    {bucketList}</li>
    return bucketList.map((data, i) => {
     if (data.length > 0 && !filterWord.test(data)) {
      return <li  key={i}  className="py-8 pl-2 text-lg font-normal leading-6 text-gray-900">
      {data}</li>
     }
     null;
  })
  }

  const scrollToBottom = () => {
    questionsEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const answers = JSON.stringify(questionsVal);
    let data;
    const res = await fetch(`/api/bucketlist/generateList?answers=${answers}`);
    if (res){
      try {
        data = await res.json();
      }
      catch (e){
        setError("There was a timeout error generating your bucket list. Please try again.")
      }
      if(data){
        const splitList = data.generatedBucketList.split(/[0-9]+\./)
        setBucketList(splitList)
        setError('');
        await fetch(`/api/revalidate/?tag=thumbnails`)
      }
    }
    setLoading(false);
  }
  return (
    <div>
      {renderQuestions()}
      <form onSubmit={handleSubmit} className='justify-center flex flex-col'>
        <button className='bg-blue-500 py-4 px-6 rounded-full font-bold text-white flex self-center hover:bg-blue-800 disabled:bg-gray-300' type='submit' disabled={loading || bucketList} > {loading && <Spinner/> } {loading ? 'Generating...' : 'Generate Bucket List'}</button>
        <Link className='text-gray-500 text-center mt-4 font-bold underline hover:text-gray-900' href='/demos/bucketlist/view-all'>View All</Link>

      </form>

      {error && <p className='text-red-500 text-center mt-4'>{error}</p>}
      {bucketList.length > 0  && <div className='border-t mt-10' >
        <div className='absolute w-[785px] z-0' >
        <Lottie options={defaultOptions} height={800} width={500} />

        </div>

        <h1 className="mb-6 text-5xl font-extrabold leading-none underline text-blue-900 decoration-slate-200">
        <div ref={questionsEndRef} className='pt-10' />

          Here&apos;s your bucket list:
          </h1>
          <p className="mb-8 text-md font-light leading-none text-gray-600 text-center  ">
            Have fun! 😉 </p>
          <ol className='divide-y list-image-[url(/circle.png)]  z-10 relative px-8 border rounded-[20px] border-gray-200'>
          {renderBucketList()}

          </ol>
        </div>}

    </div>
  )
}