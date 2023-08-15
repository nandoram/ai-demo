'use client'
import styles from '../page.module.css'
import { useState, useEffect } from 'react';
export default function LandingTemplate({completion}) {
  const [customMessage, setCustomMessage] = useState(completion)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    const res = await fetch(`/api/messages?location=${formJson.location}`);
    const data = await res.json();
    console.log(data)
    setCustomMessage(data.message)
  }


  return (
    <div className={styles.contentContainer}>
       <video autoPlay loop muted className={styles.videoBg}>
        <source src="/plane-pass.webm" />
      </video>
      <div className={styles.center}>
        <h1>{customMessage}</h1>
      </div>
      <div className={styles.inputContainer}>
        <form onSubmit={handleSubmit}>
          <label>
            <input  name="location" placeholder="Enter destination" />
          </label>
          <button type='submit' className={styles.button}>Inspire me</button>
        </form>
      </div>
    </div>
  )
}
