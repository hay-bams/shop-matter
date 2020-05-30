import mongoose from 'mongoose';
import User from './Users'; 
import Customer from './Customers'; 
import Products from './Products'; 
import Carts from './Carts'; 

export const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
}

export default {
    User,
    Customer,
    Products,
    Carts
}

