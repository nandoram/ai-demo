import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi } from 'openai'

export async function GET(request, response) {
  const { searchParams } = new URL(request.url)
  const location = searchParams.get('location')
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
          'You will answer every prompt with a relevant emojis in between the output. All your answers will always be one very short sentence.',
      },
      {
        role: 'user',
        content: `say something nice about ${location}. Make it sound like a call to action. Do not mention the city name. Do not mention 'a person' phrase. Output only one sentence.`,
      },
    ],
  })
  // console.log(location)
  // const completion = {data: {choices: [{message: {content: "Hello wo000000000rld"}}]}};
  const message = completion.data.choices[0].message.content
  return NextResponse.json({ message })
}
