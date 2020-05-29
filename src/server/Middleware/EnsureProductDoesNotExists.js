const Container = require("typedi").Container;

class EnsureProductDoesNotExists {
  constructor() {
    this.productModel = Container.get("Models").Products;

    this.handle = this.handle.bind(this);
  }

  async handle(req, res, next) {
    const foundProduct = await this.productModel.findOne({
      name: req.body.name,
    });

    if (foundProduct) {
      return res.status(400).send({
        message: "product already exists",
      });
    }

    next();
  }
}

export default EnsureProductDoesNotExists;
