class CartService {
  constructor(cartModel, productModel) {
    this.cartModel = cartModel;
    this.productModel =  productModel
  }

  //   async index () {
  //      const carts =  await this.cartModel.find()
  //      return carts
  //   }

  async create(item, customer, cart) {
     await this.cartModel.updateOne(
      {
        user: customer._id,
      },
      {
        total: cart.total + 1,
        $push: {
          products: item.product,
        },
      }
    );

    return true;
  }
}

export default CartService;
