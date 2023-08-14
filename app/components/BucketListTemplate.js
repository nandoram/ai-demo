'use client'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';

export default function BucketlistTemplate({}) { 
  const [adventureVal, setAdventureVal] = useState(50)
  const [extrovertVal, setExtrovertVal] = useState(50)

  const questions = [
    {
      title: "1. Adventure Seeker",
      content: "On a scale of 1 to 10, how much do you enjoy taking risks and trying new, adrenaline-pumping activities?",
      setFunction: setAdventureVal
    },
    {
      title: "2. Social Interactions",
      content: "How much do you enjoy socializing and being around others? (1 = Introverted, 10 = Extroverted)",
      setFunction: setExtrovertVal
    },
    ,
    {
      title: "3. Nature and Outdoors",
      content: "How much do you enjoy spending time in nature and outdoor settings? (1 = Not at all, 10 = Absolutely love it)",
      setFunction: setExtrovertVal
    },
    ,
    {
      title: "4. Creativity",
      content: "To what extent do you enjoy engaging in creative activities like art, writing, or crafting? (1 = Not creative, 10 = Extremely creative)",
      setFunction: setExtrovertVal
    },
    ,
    {
      title: "5. Cultural Exploration",
      content: "How interested are you in exploring different cultures, traditions, and cuisines? (1 = Not interested, 10 = Very interested)",
      setFunction: setExtrovertVal
    },
    ,
    {
      title: "6. Relaxation and Leisure",
      content: "How important is relaxation and downtime for you? (1 = Not important, 10 = Very important)",
      setFunction: setExtrovertVal
    },
    ,
    {
      title: "7. Learning and Growth",
      content: "How much do you value personal development and learning new skills? (1 = Not important, 10 = Very important)",
      setFunction: setExtrovertVal
    },
    ,
    {
      title: "8. Thrift and Luxury",
      content: "Are you more inclined towards budget-friendly experiences (1) or do you prefer luxury and upscale experiences (10)?",
      setFunction: setExtrovertVal
    },
    ,
    {
      title: "9. Physical Activity",
      content: "How much do you enjoy engaging in physical activities like sports, hiking, or yoga? (1 = Not at all, 10 = Love it)",
      setFunction: setExtrovertVal
    },
    ,
    {
      title: "10. Planning vs Spontaneity",
      content: "Do you prefer structured, planned activities (1) or spontaneous, unplanned adventures (10)?",
      setFunction: setExtrovertVal
    },
    ,
    {
      title: "11. Food and Culinary Experiences",
      content: "How much do you enjoy trying new foods and exploring culinary experiences? (1 = Not at all, 10 = Foodie)",
      setFunction: setExtrovertVal
    },
    ,
    {
      title: "12. Historical and Cultural Sites",
      content: "How interested are you in visiting historical landmarks and cultural sites? (1 = Not interested, 10 = Very interested)",
      setFunction: setExtrovertVal
    },
    ,
    {
      title: "13. Music and Entertainment",
      content: "To what extent does music, concerts, and entertainment play a role in your life? (1 = Not important, 10 = Very important)",
      setFunction: setExtrovertVal
    },
    ,
    {
      title: "14. Technology and Connectivity",
      content: "How comfortable are you with disconnecting from technology during your bucket list experiences? (1 = Not comfortable, 10 = Very comfortable)",
      setFunction: setExtrovertVal
    },
    ,
    {
      title: "15. Family and Friends",
      content: "How important is it for you to include family and friends in your bucket list activities? (1 = Not important, 10 = Very important)",
      setFunction: setExtrovertVal
    },

  ]
  const renderQuestions = (names) => {
    return names.map((data, i) => <div key={i} className="mb-16">
    <h3 className="mb-2 text-lg font-semibold leading-6 text-gray-900">
    {data.title}
    </h3>
    <p className="pb-5">{data.content}</p>
    <Slider min={10} defaultValue={50} marks={{ 10: 1, 20: 2, 30: 3, 40: 4, 50: 5, 60: 6, 70: 7, 80: 8, 90: 9, 100: 10 }} step={null} onChange={data.setFunction} />
  </div>)
  }
  return (
    renderQuestions(questions)
  )
}