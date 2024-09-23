import styles from './page.module.css'
import { Configuration, OpenAIApi } from 'openai'
import LandingTemplate from '../../components/LandingTemplate'

export default async function TravelLanding({}) {
  const req = await fetch(`https://ipinfo.io?token=39df038d864ab5`, {
    cache: 'no-store',
  })
  const jsonResponse = await req.json()
  const configuration = new Configuration({
    organization: 'org-dOailguhnw7ZSQFjGcgMRZec',
    apiKey: process.env.OPENAI_KEY,
  })
  const openai = new OpenAIApi(configuration)
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'You will answer every prompt with a relevant emoji in the beginning, middle and end of the output. All your answers will always be one very short sentence.',
      },
      {
        role: 'user',
        content: `Where would someone from the city of ${jsonResponse.city} want to go travel to. Pick a specific country and say something nice about it. Make it sound like a call to action. Do not mention the city name. Do not mention 'a person' phrase. Output only one sentence.`,
      },
    ],
  })
  const message = completion.data.choices[0].message.content
  return (
    <main className={styles.main}>
      <LandingTemplate completion={message} />
    </main>
  )
}
