'use client'
import styles from './page.module.css'
import 'rc-slider/assets/index.css';
import BucketlistTemplate from '@/app/components/BucketListTemplate';
export default function Bucketlist({}) { 

  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <h1 className="mb-8 pb-8 text-2xl font-bold leading-6 text-gray-900 border-b border-gray-200 ">
          Generate your own personalized bucket list by answering a few simply questions.
        </h1>
      <BucketlistTemplate/>
      </div>

    </main>
  )
}