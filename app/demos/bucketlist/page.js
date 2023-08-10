'use client'
import styles from './page.module.css'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';
export default function Bucketlist({}) { 
  const [values, setValues] = useState({values: [50]})

  return (
    <main className={styles.main}>
      <Slider min={20} defaultValue={20} marks={{ 20: 20, 40: 40, 100: 100 }} step={null} />
    </main>
  )
}