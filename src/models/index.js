import mongoose from 'mongoose';
import User from './users'; 
import Customer from './customers'; 

export const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
}

export default {
    User,
    Customer
}

