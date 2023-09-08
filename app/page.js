/* eslint-disable @next/next/no-img-element */
'use client'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import * as tokens from '/design-tokens/figmaTokens.json'
export default function Home({}) {
  return (
    // <main className={styles.main} style={{backgroundColor: tokens.global.testColor.value }}>
    <main className={styles.main}>

      <div className={`container mx-auto px-4 max-w-screen-xl pt-10`}>
        <h1 className="text-3xl font-bold  text-left p-0"> Thrillworks AI Tech Demos </h1>
        <p className=" line-clamp-3 text-sm leading-6 text-gray-600">View and interact with tech demos meant to demonstrate use cases for generative AI technology </p>
        <ul className='mt-2 flex flex-row flex-wrap -ml-1 '>
          <li className='px-5 m-1 border rounded-full'>NextJS</li>
          <li className='px-5 m-1 border rounded-full'>AWS</li>
          <li className='px-5 m-1 border rounded-full'>Serverless Framework</li>
          <li className='px-5 m-1 border rounded-full'>ChatGPT API</li>
          <li className='px-5 m-1 border rounded-full'>Location API</li>
          <li className='px-5 m-1 border rounded-full'>Tailwind CSS</li>
          <li className='px-5 m-1 border rounded-full'>Tamagui Components</li>
          <li className='px-5 m-1 border rounded-full'>Figma Tokens</li>
        </ul>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 mt-5 pt-5  lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          <article className="flex max-w-xl flex-col items-start justify-start">
            <div className="flex items-center gap-x-4 text-xs">
              <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a> 
            </div>
            <div className="group relative">
            <Image  width={500} height={500} src="/plane-beach.jpg" alt="" className=" w-full max-h-64  object-cover rounded bg-gray-50 mt-5 group-hover:drop-shadow-2xl"/>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600">
                <Link href="/demos/travel-landing">
                  <span className="absolute inset-0"></span>
                  Travel Landing
                </Link>
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">Get a call to vacation - to a destination based on your city(IP) or enter a location. Refresh the page to generate a new message. </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <Image src="/headshot-nr.jpg"  width={100}
              height={100} alt="Picture of author" className="h-10 w-10 rounded-full bg-gray-50"/>
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <Link href="/demos/travel-landing">
                    <span className="absolute inset-0"></span>
                    Nando Rambiriche
                  </Link>
                </p>
                <p className="text-gray-600">Developer</p>
              </div>
            </div>
          </article>
          <article className="flex max-w-xl flex-col items-start justify-start">
            <div className="flex items-center gap-x-4 text-xs">
              <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Novelty</a>
            </div>
            <div className="group relative">
            <Image  width={500} height={500} src="/bucketlist.jpg" alt="" className=" w-full group-hover:drop-shadow-2xl max-h-64  object-cover rounded bg-gray-50 mt-5 object-top"/>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600">
                <Link href="/demos/bucketlist">
                  <span className="absolute inset-0"></span>
                  Generate Bucket list
                </Link>
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">Create a personalized bucket list by answering a few questions based on your personality.</p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <Image src="/headshot-nr.jpg"  width={100}
              height={100} alt="Picture of author" className="h-10 w-10 rounded-full bg-gray-50"/>
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <Link href="/demos/bucketlist">
                    <span className="absolute inset-0"></span>
                    Nando Rambiriche
                  </Link>
                </p>
                <p className="text-gray-600">Developer</p>
              </div>
            </div>
          </article>
          <article className="flex max-w-xl flex-col items-start justify-start">
            <div className="flex items-center gap-x-4 text-xs">
              <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Education</a>
            </div>
            <div className="group relative">
            <Image  width={500} height={500} src="/book.jpg" alt="" className=" w-full max-h-64 group-hover:drop-shadow-2xl  object-cover rounded bg-gray-50 mt-5 object-middle"/>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600">
                <Link href="/demos/stories">
                  <span className="absolute inset-0"></span>
                  Short Teachable Children Stories
                </Link>
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">Generate a short teachable story for your kid to learn from. Personalize the story with their name, age and any specifics in the lesson. </p>
   
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <Image src="/headshot-nr.jpg"  width={100}
              height={100} alt="Picture of author" className="h-10 w-10 rounded-full bg-gray-50"/>
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <Link href="/demos/stories">
                    <span className="absolute inset-0"></span>
                    Nando Rambiriche
                  </Link>
                </p>
                <p className="text-gray-600">Developer</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}

