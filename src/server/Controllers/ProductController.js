class ProductController {
    constructor(Container) {
        this.product = Container.get('productService')

        this.index = this.index.bind(this)
        this.create = this.create.bind(this)
    }

  

    async create(req, res) {
        const product = await this.product.create(req.body)
        return res.status(200).json({
            product
        })
    }
}

export default ProductController;