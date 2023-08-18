import { NextResponse } from 'next/server'

export async function GET(request, response) {
  const { searchParams } = new URL(request.url);
  const answers = JSON.parse(searchParams.get('answers'));
  let rawResponse;
  try {
    rawResponse = await fetch('https://dpojactvu7.execute-api.us-east-1.amazonaws.com/createBucketList', {
      method: 'POST',
      body: JSON.stringify({ content: `Generate a specific and personalized bucketlist based on someone that rates adventure seeking a ${answers.adventure} out of 10, social interactions a ${answers.social} out of 10, nature and outdoors a ${answers.nature} out of 10, creativity a ${answers.creativity} out of 10, cultural exploration a ${answers.cultural} out of 10, learning and growth a ${answers.learning} out of 10, physical activity a ${answers.physical} out of 10, food and culinary experiences a ${answers.food} out of 10, historical and cultural sites a ${answers.historical} out of 10, family and friends a ${answers.family} out of 10`}),
    });
    if (rawResponse){
      const content = await rawResponse.json();
      const generatedBucketList = content.message
  
      await fetch('https://dpojactvu7.execute-api.us-east-1.amazonaws.com/addBucketList', {
        method: 'POST',
        body: JSON.stringify({ content: generatedBucketList}),
      });
    
      return NextResponse.json({ generatedBucketList })
    }
  }
  catch (err) {
    return NextResponse.json({ error: 'timed out' })
  }

 
}