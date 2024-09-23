"use strict";

const AWS = require("aws-sdk");

module.exports.addBucketList = async (event) => {
  const body = JSON.parse(Buffer.from(event.body, "utf8").toString());
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const id = makeId(10);
  const putParams = {
    RequestItems: {
      [process.env.DYNAMODB_BUCKET_TABLE]: [
        {
          PutRequest: {
            Item: {
              primary_key: id,
              content: body.content,
              createdAt: Date.now(),
              questionsAndAnswers: body.questionsAndAnswers,
            },
          },
        },
      ],
      [process.env.DYNAMODB_BUCKET_THUMBS_TABLE]: [
        {
          PutRequest: {
            Item: {
              primary_key: id,
              createdAt: Date.now(),
              questionsAndAnswers: body.questionsAndAnswers,
            },
          },
        },
      ],
    },
  };
  await dynamoDb.batchWrite(putParams).promise();
  return {
    statusCode: 201,
    headers: {
      "Access-Control-Allow-Origin": "https://thrillworks-ai-demo.vercel.app",
      "Access-Control-Allow-Credentials": true,
    },
  };
};

function makeId(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
