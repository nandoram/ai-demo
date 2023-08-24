/* eslint-disable @next/next/no-img-element */
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default async function Home({}) {
  

  return (
    <main className={styles.main}>
      <div className='container mx-auto px-4 max-w-screen-xl pt-10	'>
        <h1 className="text-3xl font-bold underline"> AI Tech Demos </h1>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between">
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
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
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
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
            </div>
            <div className="group relative">
            <Image  width={500} height={500} src="/bucketlist.jpg" alt="" className=" w-full group-hover:drop-shadow-2xl max-h-64  object-cover rounded bg-gray-50 mt-5 object-top"/>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600">
                <Link href="/demos/bucketlist">
                  <span className="absolute inset-0"></span>
                  Generate Bucket list
                </Link>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
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
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
            </div>
            <div className="group relative">
            <Image  width={500} height={500} src="/book.jpg" alt="" className=" w-full max-h-64 group-hover:drop-shadow-2xl  object-cover rounded bg-gray-50 mt-5 object-middle"/>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600">
                <Link href="/demos/books">
                  <span className="absolute inset-0"></span>
                  Discover Books
                </Link>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <Image src="/headshot-nr.jpg"  width={100}
              height={100} alt="Picture of author" className="h-10 w-10 rounded-full bg-gray-50"/>
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <Link href="/demos/books">
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

