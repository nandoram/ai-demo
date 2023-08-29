import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('key');
  let rawResponse;
  try {
    rawResponse = await fetch('https://dpojactvu7.execute-api.us-east-1.amazonaws.com/getStory', {
      method: 'POST',
      body: JSON.stringify({ primary_key: key}),
    });
  }
  catch (err) {
    return NextResponse.json({ error: 'timed out' })
  }
  if (rawResponse){
    const content = await rawResponse.json();
    return NextResponse.json({ data: content.items })
  }
 
}