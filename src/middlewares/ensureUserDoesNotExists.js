const Container = require('typedi').Container;
import Models from '../models'; // temporary solution

class EnsureUserDoesNotExists {
  constructor() {
    this.userModel = Models.User;

    this.handle = this.handle.bind(this);
  }

  async handle(req, res, next) {
    const foundUser = await this.userModel.findOne({
      email: req.body.email,
    });

    console.log(foundUser)

    if (foundUser) {
      return res.send('user already exists')
    }

    next()
  }
}

const ensureUserDoesNotExists = new EnsureUserDoesNotExists()
export default ensureUserDoesNotExists
