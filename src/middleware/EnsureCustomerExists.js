const Container = require('typedi').Container;

class EnsureCustomerExists {
  constructor() {
    this.customerModel = Container.get('Models').Customer

    this.handle = this.handle.bind(this);
  }

  async handle(req, res, next) {
    const foundCustomer = await this.customerModel.findOne({
      email: req.body.email,
    });

    if (!foundCustomer) {
      return res.status(400).send({
        message: "customer does not exist",
      });
    }

    req.foundCustomer = foundCustomer

    next()
  }
}

export default EnsureCustomerExists
