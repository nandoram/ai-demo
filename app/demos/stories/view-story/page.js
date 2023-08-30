'use client'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react';

export default function Story({}) { 
  const searchParams = useSearchParams()
  const key = searchParams.get('key')
  const [story, setStory] = useState('');
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState('');



  const getList = async () => {
    const req = await fetch(`/api/stories/getStory?key=${key}`);
    const bucketListsJson = await req.json();
    const story = bucketListsJson.data.content;
    setStory(story)
    setQuestionsAndAnswers(bucketListsJson.data.questionsAndAnswers)
  } 

  const renderQuestionsAndAnswers = () => {
    return Object.keys(questionsAndAnswers).map((data, i) => {
     if (data.length > 0 && data !== 'lesson') {
      return <li  key={i}  className="py-1  flex flex-col justify-between px-2 text-xs capitalize leading-6 text-gray-900">
        <span className=" font-medium ">{data}</span><span className=" font-black flex self-center">{questionsAndAnswers[data]}</span></li>
     }
     null;
  })
  }



  getList();

  return (
      <div className={'p-6 flex flex-col'}>
        <h1 className="mb-6 text-5xl font-extrabold leading-none underline text-blue-900 decoration-slate-200">
         <span className=''></span>Short Children Story
        </h1>
        <h2 className='font-bold capitalize text-center'>{questionsAndAnswers.lesson}</h2>
        <ul className='self-center flex flex-row bg-gray-100 divide-x z-10 mx-1 my-4 relative px-2 mx-1 border rounded-[20px] border-gray-200 '>
          {renderQuestionsAndAnswers()}
        </ul>
        <p className=' mt-8 self-center max-w-4xl leading-loose z-10 relative px-8 mx-8 border rounded-[20px] border-gray-200'>{story}</p>
      </div>

  )
}