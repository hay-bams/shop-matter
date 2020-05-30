import jwt from "jsonwebtoken";
const Container = require("typedi").Container;

class EnsureCustomerExists {
  constructor() {
    this.customerModel = Container.get("Models").Customer;

    this.handle = this.handle.bind(this);
  }

  async handle(req, res, next) {
    let decoded;
    let foundCustomer;
    if (req.headers.authorization) {
      const token = req.headers.authorization
        .slice(7, req.headers.authorization.length)
        .trimLeft();
      decoded = jwt.verify(token, process.env.SECRET);
      foundCustomer = await this.customerModel.findOne({
        email: decoded.email,
      });
    } else {
      foundCustomer = await this.customerModel.findOne({
        email: req.body.email,
      });
    }

    if (!foundCustomer) {
      return res.status(400).send({
        message: "customer does not exist",
      });
    }

    req.foundCustomer = foundCustomer;

    next();
  }
}

export default EnsureCustomerExists;
