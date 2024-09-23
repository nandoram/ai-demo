'use strict';
const AWS = require('aws-sdk');

module.exports.getBucketList = async (event) => {
  const body = JSON.parse(Buffer.from(event.body, 'utf8').toString());
  const getParams = {
    TableName: process.env.DYNAMODB_BUCKET_TABLE,
    Key: { 'primary_key': body.primary_key },
  };

  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const result = await dynamodb.get(getParams).promise();

  if (!result.Item) {
    return {
      statusCode: 404,
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      items: result.Item
    }),
  };
};