class CartController {
    constructor(Container) {
        this.cart = Container.get('cartService')

        // this.index = this.index.bind(this)
        this.create = this.create.bind(this)
    }

    // async index(req, res) {
    //     const products = await this.product.index()
    //     return res.status(200).json({
    //         products
    //     })
    // }

    async create(req, res) {
        const cart = await this.cart.create(req.body, req.foundCustomer, req.cart)
        return res.status(200).json({
            message: "Product added to cart"
        })
    }
}

export default CartController;