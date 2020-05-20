import bcrypt from 'bcrypt'
const Container = require('typedi').Container;

class EnsurePasswordIsValid {
  constructor() {
    this.customerModel = Container.get('Models').Customer

    this.handle = this.handle.bind(this);
  }

  async handle(req, res, next) {
    const passwordMatch = await bcrypt.compare(req.body.password, req.foundCustomer.password)

    if (!passwordMatch) {
      return res.status(400).send({
          message: 'password is invalid'
      })
    }

    next()
  }
}

export default EnsurePasswordIsValid
