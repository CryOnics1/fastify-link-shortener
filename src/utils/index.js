const generate = require('nanoid/generate')
const { hashSettings } = require('../config')

const getRandomId = () => generate(hashSettings.alphabet, hashSettings.length)

module.exports = {
  getRandomId
}
