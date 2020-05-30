const Container = require('typedi').Container;

class EnsureCustomerHasCart {
  constructor() {
    this.cartModel = Container.get('Models').cart

    this.handle = this.handle.bind(this);
  }

  async handle(req, res, next) {
    const foundCart = await this.cartModel.findOne({
      user: req.foundCustomer.id
    });

    if (!foundCart) {
      return res.status(400).send({
        message: "customer does not exist",
      });
    }

    req.foundCustomer = foundCustomer

    next()
  }
}

export default EnsureCustomerHasCart
