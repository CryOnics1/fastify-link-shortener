module.exports = {
  create () {
    return {
      schema: {
        body: {
          type: 'object',
          required: ['url'],
          properties: {
            url: {
              type: 'string',
              format: 'uri',
              maxLength: 255,
              minLength: 2
            }
          }
        }
      }
    }
  }
}
