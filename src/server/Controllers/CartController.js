class CartController {
    constructor(Container) {
        this.cart = Container.get('cartService')

        this.index = this.index.bind(this)
        this.create = this.create.bind(this)
    }

    async index(req, res) {
        const products = await this.cart.index(req.foundCustomer)
        return res.status(200).json({
            products
        })
    }

    async create(req, res) {
        const options = {
            customer: req.foundCustomer,
            cart: req.cart,
            product: req.product
        }
        const cart = await this.cart.create(options )
        return res.status(200).json({
           cart
        })
    }
}

export default CartController;