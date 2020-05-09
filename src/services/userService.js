import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async signup(user) {
    // hash the user password
    user.password = await bcrypt.hash(user.password, 10);
    // create a JWT token with the user object

    // Add the user to the database
    const data = await this.userModel.create(user);
    var token = jwt.sign(
      {
        email: data.email,
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname,
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
