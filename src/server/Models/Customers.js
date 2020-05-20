import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema(
    {
        firstname: {
            type: String, 
            required: true
        },
        lastname: {
            type: String, 
            required: true
        },
        email: {
            type: String, 
            required: true,
            unique: true
        },
        username: {
            type: String, 
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    
    }
)

const Customer = mongoose.model('Customer', customerSchema)

export default Customer;