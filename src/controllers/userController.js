class UserController {
    constructor(Container) {
        this.user = Container.get('userService')

        this.register = this.register.bind(this)
    }

    async register(req, res) {
        const user = await this.user.register(req.body)
        
        return res.status(200).json({
            user: user.data,
            token: user.token
        })
    }
}
 
export default UserController