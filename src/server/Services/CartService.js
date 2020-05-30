class CartService {
  constructor(cartModel, productModel) {
    this.cartModel = cartModel;
    this.productModel = productModel;
  }

  async index(customer) {
    const carts = await this.cartModel.findAll({
        user: customer._id
    });
    return carts;
  }

  async create(requestOptions) {
    const queryParams = { user: requestOptions.customer._id };

    const update = {
      total: requestOptions.cart.total + 1,
      $push: {
        products: requestOptions.product._id,
      },
    };

    const options = { new: true };
    // update the cart
    let cart = await this.cartModel.findOneAndUpdate(queryParams, update, options);

    //update the product
    if(cart) {
        await this.productModel.updateOne({
           _id: requestOptions.product._id
        }, {
            quantity: requestOptions.product.quantity - 1
        })
    }

    return cart;
  }
}

export default CartService;
