const linkRepository = require('../repositories/linkRepository')
const NotFoundError = require('../exceptions/NotFoundError')
const { getRandomId } = require('../utils')

const config = require('../config')

module.exports = {
  async findLink (req, res) {
    const { id } = req.params

    const { Item: item } = await linkRepository.findById(id)
    if (!item || !item.url) {
      // res.redirect('/') e.g. redirect to main page
      throw new NotFoundError(config.errors.linkNotFound)
    }

    res.redirect(item.url)
  },

  async createLink (req, res) {
    const { url } = req.body

    const id = getRandomId()
    await linkRepository.create({ id, url })

    res.send({ url: `${config.domain}/${id}` })
  }
}
