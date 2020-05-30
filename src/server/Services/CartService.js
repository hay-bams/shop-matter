class CartService {
  constructor(cartModel, productModel) {
    this.cartModel = cartModel;
    this.productModel = productModel;
  }

  async index() {
    const carts = await this.cartModel.find();
    return carts;
  }

  async create(item, customer, cart) {
    const queryParams = { user: customer._id };

    const update = {
      total: cart.total + 1,
      $push: {
        products: item.product,
      },
    };

    const options = { new: true };
    cart = await this.cartModel.findOneAndUpdate(queryParams, update, options);

    return cart;
  }
}

export default CartService;
