import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi } from "openai";
import { questions } from '@/app/demos/bucketlist/questionsData';
export async function GET(request, response) {
  const { searchParams } = new URL(request.url);
  const answers = JSON.parse(searchParams.get('answers'));
  let questionArray = [];
  questions.map((data, i) => { 
    questionArray.push(data.content)
  });
  const rawResponse = await fetch('https://dpojactvu7.execute-api.us-east-1.amazonaws.com/createBucketList', {
    method: 'POST',
    body: JSON.stringify({ content: `Generate a specific and personalized bucketlist based on someone that rates adventure seeking a ${answers.adventure} out of 10, social interactions a ${answers.social} out of 10, nature and outdoors a ${answers.nature} out of 10, creativity a ${answers.creativity} out of 10, cultural exploration a ${answers.cultural} out of 10, learning and growth a ${answers.learning} out of 10, physical activity a ${answers.physical} out of 10, food and culinary experiences a ${answers.food} out of 10, historical and cultural sites a ${answers.historical} out of 10, family and friends a ${answers.family} out of 10`}),
  });
  const content = await rawResponse.json();
  console.log(content);
  const generatedBucketList = content.message
  // const configuration = new Configuration({
  //     organization: "org-dOailguhnw7ZSQFjGcgMRZec",
  //     apiKey: process.env.OPENAI_KEY,
  // });
  // const openai = new OpenAIApi(configuration);
  // const completion = await openai.createChatCompletion({
  //   model: "gpt-3.5-turbo",
  //   messages: [{role: "user", content: `Generate a long, specific and personalized bucketlist based on the following questions and answers: Q ${questionArray[0]} A. ${answers.adventure}, Q ${questionArray[1]} A. ${answers.social}, Q ${questionArray[2]} A. ${answers.nature}, Q ${questionArray[3]} A. ${answers.creativity}, Q ${questionArray[4]} A. ${answers.cultural}, Q ${questionArray[5]} A. ${answers.learning}, Q ${questionArray[6]} A. ${answers.physical}, Q ${questionArray[7]} A. ${answers.food}, Q ${questionArray[8]} A. ${answers.historical}, Q ${questionArray[9]} A. ${answers.family}`}],
  // });
  // let generatedBucketList = completion.data.choices[0].message.content
  // generatedBucketList =generatedBucketList.split(/[0-9]+\./)

  return NextResponse.json({ generatedBucketList })
}