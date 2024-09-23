'use strict';
 
// const AWS = require('aws-sdk');
const { OpenAI } = require('openai');

module.exports.createBucketList = async (event) => {
  const body = JSON.parse(Buffer.from(event.body, 'utf8').toString());
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
  });
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: body.content }],
    model: 'gpt-3.5-turbo-16k',
    stop: ['21.']
  });
  const message = completion.choices[0].message.content
   return {
     statusCode: 201,
     body: JSON.stringify({
      message: message,
    }),
    headers: {
      'Access-Control-Allow-Origin': 'https://thrillworks-ai-demo.vercel.app',
      'Access-Control-Allow-Credentials': true,
    },
   };
};