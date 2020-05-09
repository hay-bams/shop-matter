class UserController {
    constructor(Container) {
        this.user = Container.get('userService')

        this.signup = this.signup.bind(this)
    }

    async signup(req, res) {
        const user = await this.user.signup(req.body)
        return res.status(200).json({
            user: user.data,
            token: user.token
        })
    }
}
 
export default UserController