import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

class CustomerService {
  constructor(customerModel) {
    this.customerModel = customerModel;
  }

  async register(customer) {
    // hash the customer password
    customer.password = await bcrypt.hash(customer.password, 10);

    const data = await this.customerModel.create(customer);
    customer = {
      email: data.email,
      username: data.username,
      firstname: data.firstname,
      lastname: data.lastname,
    };
    const token = jwt.sign(customer, process.env.SECRET);

    return {
      data: customer,
      token,
    };
  }

  async login(customer, foundCustomer) {
    customer = {
      email: foundCustomer.email,
      username: foundCustomer.username,
      firstname: foundCustomer.firstname,
      lastname: foundCustomer.lastname,
    };
    const token = jwt.sign(customer, process.env.SECRET);

    delete customer.password;

    return {
      data: customer,
      token,
    };
  }
}

export default CustomerService;
