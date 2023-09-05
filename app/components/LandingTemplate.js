'use client'
import styles from '../page.module.css'
import { useState, useEffect } from 'react';
import Spinner from './Spinner';

export default function LandingTemplate({completion}) {
  const [customMessage, setCustomMessage] = useState(completion)
  const [loading, setLoading] = useState(false);
  const  [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    if (formJson.location.length < 1) return setError('Must enter destination')
    if (formJson.location.length > 20) return setError('Destination must be less than 20 characters')
    setLoading(true);
    const res = await fetch(`/api/messages?location=${formJson.location}`);
    const data = await res.json();
    setCustomMessage(data.message)
    setLoading(false);
  }


  return (
    <div className={styles.contentContainer}>
       <video autoPlay loop muted className={styles.videoBg}>
        <source src="/plane-pass.webm" />
      </video>
      <div className={styles.center}>
        {loading ? <Spinner/> : <h1>{customMessage}</h1>}
      </div>
      <div className={styles.inputContainer}>
        <form onSubmit={handleSubmit} className='justify-center flex'>
          <label>
            <input className='text-gray-800 bg-white mr-2' name="location" placeholder="Enter destination" />
          </label>
          <button className={'bg-blue-500 px-6 rounded-full font-bold text-white flex hover:bg-blue-800 disabled:bg-gray-300 items-center'} type='submit' disabled={loading} > {loading && <Spinner/> } {loading ? 'Generating...' : 'Inspire me'}</button>
        </form>
        {error && <p className='text-red-500 text-xs'>{error}</p>}
      </div>
    </div>
  )
}
