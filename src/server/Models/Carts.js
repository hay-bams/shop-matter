import mongoose, { mongo } from 'mongoose';

const CartSchema = new mongoose.Schema(
    {
        products: [
            {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Product',
            }
        ],
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        total: {
            type: Number,
            required: true,
            default: 0
        }
    }
)

const Carts = mongoose.model('Cart', CartSchema)

export default Carts;