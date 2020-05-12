import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

class CustomerService {
  constructor(customerModel) {
    this.customerModel = customerModel;
  }

  async register(customer) {
    // hash the customer password
    customer.password = await bcrypt.hash(customer.password, 10);

    const data = await this.customerModel.create(customer);
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
  
  async login(customer, foundCustomer) {
    const token = jwt.sign(
      {
        email: foundCustomer.email,
        username: foundCustomer.username,
        firstname: foundCustomer.firstname,
        lastname: foundCustomer.lastname,
      },
      process.env.SECRET
    );

    return {
      token
    };
  }
}

export default CustomerService;
