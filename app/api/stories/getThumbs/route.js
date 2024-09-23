import { NextResponse } from 'next/server'

export async function GET() {
  let rawResponse
  try {
    rawResponse = await fetch(
      'https://dpojactvu7.execute-api.us-east-1.amazonaws.com/kid-stories/getStoriesThumbs',
      { cache: 'no-store', next: { tags: ['thumbnails-story'] } },
    )
  } catch (err) {
    return NextResponse.json({ error: 'timed out' })
  }
  if (rawResponse) {
    const content = await rawResponse.json()
    return NextResponse.json({ content })
  }
}

export async function POST() {}
