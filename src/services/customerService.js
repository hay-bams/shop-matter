import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

class CustomerService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async register(customer) {
    // hash the customer password
    customer.password = await bcrypt.hash(customer.password, 10);

    const data = await this.userModel.create(customer);
    const token = jwt.sign(
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

export default CustomerService;
