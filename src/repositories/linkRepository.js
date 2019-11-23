const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB.DocumentClient()
const tableName = process.env.link_table_name

module.exports = {
  async create (attributes) {
    const createdAt = Math.round(Date.now() / 1000) // unix

    return dynamodb.put({
      TableName: tableName,
      Item: { ...attributes, createdAt }
    }).promise()
  },

  async findById (id) {
    return dynamodb.get({
      TableName: tableName,
      Key: { id }
    }).promise()
  },
}
