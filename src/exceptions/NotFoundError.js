class NotFoundError extends Error {
  constructor (msg) {
    super(msg)

    this.status = 404
    this.message = msg
  }
}

module.exports = NotFoundError
