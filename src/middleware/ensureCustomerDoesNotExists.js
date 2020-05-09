const Container = require('typedi').Container;

class EnsureCustomerDoesNotExists {
  constructor() {
    this.customerModel = Container.get('Models').Customer

    this.handle = this.handle.bind(this);
  }

  async handle(req, res, next) {
    const foundCustomer = await this.customerModel.findOne({
      email: req.body.email,
    });

    if (foundCustomer) {
      return res.send('cutomer already exists')
    }

    next()
  }
}

export default EnsureCustomerDoesNotExists
