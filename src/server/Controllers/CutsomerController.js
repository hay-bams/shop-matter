class CustomerController {
    constructor(Container) {
        this.customer = Container.get('customerService')

        this.register = this.register.bind(this)
        this.login = this.login.bind(this)
    }

    async register(req, res) {
        const customer = await this.customer.register(req.body)
        return res.status(200).json({
            customer: customer.data,
            token: `Bearer ${customer.token}`
        })
    }
    
    async login(req, res) {
        const customer = await this.customer.login(req.body, req.foundCustomer)
        return res.status(200).json({
            customer: customer.data,
            token: `Bearer ${customer.token}`
        })
    }
}
 
export default CustomerController