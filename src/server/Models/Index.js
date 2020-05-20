import mongoose from 'mongoose';
import User from './Users'; 
import Customer from './Customers'; 

export const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
}

export default {
    User,
    Customer
}
