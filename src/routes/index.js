const linkController = require('../controllers/linkController')
const linkValidator = require('../validators/linkValidator')

module.exports = (router) => {
  router.get('/:id', linkController.findLink)
  router.post('/', linkValidator.create(), linkController.createLink)
}
