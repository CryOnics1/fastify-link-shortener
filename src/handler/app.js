const awsLambdaFastify = require('aws-lambda-fastify')
const app = require('fastify')()
const routes = require('../routes')

routes(app)

module.exports.handler = awsLambdaFastify(app)
