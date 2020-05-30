import { response } from "express";

const Container = require("typedi").Container;

class EnsureProductRemains {
  constructor() {
    this.productModel = Container.get("Models").Products;
    this.cartModel = Container.get("Models").Carts;

    this.handle = this.handle.bind(this);
  }

  async handle(req, res, next) {
    let cart = await this.cartModel
      .findOne({
        user: req.foundCustomer._id,
      })
      .populate("products");

    if (!cart) {
      cart = await this.cartModel.create({
        user: req.foundCustomer._id,
      });
    }

    const product = await this.productModel.findOne({
      _id: req.body.product,
    });

    const result = cart.products.filter(
      (product) => product.id === req.body.product
    );
    if (product.quantity > result.length) {
      req.cart = cart;
      req.product = product;
      next();
    } else {
      return res.status(400).json({
        message: "out of stock",
      });
    }
  }
}

export default EnsureProductRemains;
