import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async register(user) {
    // hash the user password
    user.password = await bcrypt.hash(user.password, 10);

    const data = await this.userModel.create(user);
    const token = jwt.sign(
      {
        email: data.email,
        firstname: data.firstname,
        lastname: data.lastname
      },
      process.env.SECRET
    );


    return {
      data,
      token,
    };
  }
}

export default UserService;
