'use client'
import 'rc-slider/assets/index.css';
import BucketlistTemplate from '@/app/components/BucketListTemplate';
import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react';

export default function Bucketlist({}) { 
  const searchParams = useSearchParams()
  const key = searchParams.get('key')
  const [bucketList, setBucketList] = useState('');
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState('');


  const renderBucketList = () => {
    const filterWord = /bucket|Bucket/;
    if (!(Array.isArray(bucketList)) && bucketList.length >= 0) return  <li  className="py-8 pl-2 text-lg font-normal leading-6 text-gray-900">
    {bucketList}</li>
    return bucketList.map((data, i) => {
      if (data.length > 0 && !filterWord.test(data)) {
        return <li  key={i}  className="py-8 pl-2 text-lg font-normal leading-6 text-gray-900">
        {data}</li>
      }
      null;
    })
  }
  const getList = async () => {
    const req = await fetch(`/api/bucketlist/getList?key=${key}`);
    const bucketListsJson = await req.json();
    const splitList = bucketListsJson.data.content.split(/[0-9]+\./)
    setBucketList(splitList)
    setQuestionsAndAnswers(bucketListsJson.data.questionsAndAnswers)
  } 

  const renderQuestionsAndAnswers = () => {
    const date =  new Date(questionsAndAnswers.date);
    return Object.keys(questionsAndAnswers).map((data, i) => {
     if (data.length > 0) {
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
         <span className=''></span>Bucket List
        </h1>
        <ul className='self-center flex flex-row bg-gray-100 divide-x z-10 mx-1 my-4 relative px-2 mx-1 border rounded-[20px] border-gray-200 '>
          {renderQuestionsAndAnswers()}
        </ul>
          <ol className='divide-y list-image-[url(/circle.png)] self-center max-w-4xl  z-10 relative px-8 mx-8 border rounded-[20px] border-gray-200'>
            {renderBucketList()}

          </ol>
      </div>

  )
}