import styles from './page.module.css'
import Link from 'next/link'

export default async function Home({}) {
  

  return (
    <main className={styles.main}>
      <h1> AI + Marketing Tech Demos </h1>
      <Link href="/demos/travel-landing"> Travel Landing Page</Link>
      <Link href="/demos/bucketlist"> Generate Bucketlist</Link>

    </main>
  )
}

