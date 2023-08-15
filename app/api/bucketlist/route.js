import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi } from "openai";
import { questions } from '@/app/demos/bucketlist/questionsData';
export async function GET(request, response) {
  const { searchParams } = new URL(request.url);
  const answers = JSON.parse(searchParams.get('answers'));
  console.log(answers);
  let questionArray = [];
  questions.map((data, i) => { 
    questionArray.push(data.content)
  });
  const configuration = new Configuration({
      organization: "org-dOailguhnw7ZSQFjGcgMRZec",
      apiKey: process.env.OPENAI_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{"role": "system", "content": "You will generate a long bucketlist based on answers given from a personality quiz."}, {role: "user", content: `Generate a personalized and specific bucketlist based on the following questions and answers: Q ${questionArray[0]} A. ${answers.adventure}, Q ${questionArray[1]} A. ${answers.social}, Q ${questionArray[2]} A. ${answers.nature}, Q ${questionArray[3]} A. ${answers.creativity}, Q ${questionArray[4]} A. ${answers.cultural}, Q ${questionArray[5]} A. ${answers.learning}, Q ${questionArray[6]} A. ${answers.physical}, Q ${questionArray[7]} A. ${answers.food}, Q ${questionArray[8]} A. ${answers.historical}, Q ${questionArray[9]} A. ${answers.family}`}],
  });
 let generatedBucketList = completion.data.choices[0].message.content
  generatedBucketList =generatedBucketList.split(/[0-9]+\./)
  console.log(generatedBucketList)
  return NextResponse.json({ generatedBucketList })
}