const Container = require("typedi").Container;

class EnsureUserDoesNotExists {
  constructor() {
    this.userModel = Container.get("Models").User;

    this.handle = this.handle.bind(this);
  }

  async handle(req, res, next) {
    const foundUser = await this.userModel.findOne({
      email: req.body.email,
    });

    if (foundUser) {
      return res.status(400).send({
        message: "user already exists",
      });
    }

    next();
  }
}

export default EnsureUserDoesNotExists;
