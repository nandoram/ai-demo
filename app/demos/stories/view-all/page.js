'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'


export default function ViewAllStories({}) { 
  const router = useRouter()

  const [storiesThumbs, setStoriesThumbs] = useState('');
  useEffect(() => {
    getThumbs();
  }, []);

  const getThumbs = async () => {
    const req = await fetch(`/api/stories/getThumbs`, { cache: 'no-store', next: { tags: ['thumbnails-story'] } });
    const storiesJson = await req.json();
    console.log(storiesJson)
    setStoriesThumbs(storiesJson.content)
  } 

  const handleClick = (e) => {
    router.push(`/demos/stories/view-story?key=${e}`)

  }
  const renderStoriesWrapper = () => {
    if (storiesThumbs.length < 1) return

    return storiesThumbs.items.map((data, i) => {
      const date = new Date(data.date);
      return <div key={i}>
        <a  onClick={()=>handleClick(data.key)}>
          <ul className='hover:bg-gray-100 divide-y z-10 mx-1 my-2 relative px-8 mx-1 border rounded-[20px] border-gray-100 hover:border-gray-500'>
          {renderStories(data.content)}</ul>
          <p className="text-md font-black text-gray-600 text-center block capitalize  "> {data.content.lesson}</p>
          <p className="mb-8 text-xs font-light leading-none text-gray-400 text-center  ">{date.toString()}</p>
        </a>
      </div>
  })
  }
  const renderStories = (listContent) => {
    return Object.keys(listContent).map((data, i) => {
     if (data.length > 0 && data !== 'lesson') {
      return <li  key={i}  className="py-1 flex justify-between pl-1 text-xs capitalize leading-6 text-gray-900">
        <span className=" font-medium ">{data}</span><span className=" font-bold ">{listContent[data]}</span></li>
     }
     null;
  })
  }
  return (
      <div className={'p-4'}>
        <h1 className="mb-6 text-5xl font-extrabold leading-none underline text-blue-900 decoration-slate-200">
         <span className=''></span>All Generated Stories
        </h1>
        <div className="lg:grid-cols-6 grid-cols-2 grid auto-cols-fr gap-4	 	">{renderStoriesWrapper()}</div>
      </div>

  )
}