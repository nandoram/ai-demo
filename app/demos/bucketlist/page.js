'use client'
import styles from './page.module.css'
import 'rc-slider/assets/index.css'
import BucketlistTemplate from '@/app/components/BucketListTemplate'
export default function Bucketlist({}) {
  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <h1 className="mb-6 text-5xl font-extrabold leading-none underline text-blue-900 decoration-slate-200">
          <span className=""></span>Bucket List Generator
        </h1>
        <p className="mb-8 pb-8 text-md font-light leading-none text-gray-500  ">
          Answer a few questions based on your personality and get the ultimate
          personalized bucket list.
        </p>
        <BucketlistTemplate />
      </div>
    </main>
  )
}
