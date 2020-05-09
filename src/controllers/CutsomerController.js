class CustomerController {
    constructor(Container) {
        this.customer = Container.get('customerService')

        this.register = this.register.bind(this)
    }

    async register(req, res) {
        const customer = await this.customer.register(req.body)
        return res.status(200).json({
            customer: customer.data,
            token: customer.token
        })
    }
}
 
export default CustomerController