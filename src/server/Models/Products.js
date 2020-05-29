import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: true
        },
        price: {
            type: Number, 
            required: true
        },
        description: {
            type: String, 
            required: true,
            unique: true
        },
        quantity: {
            type: Number, 
            required: true,
            unique: true
        }
    }
)

const Products = mongoose.model('Product', productSchema)

export default Products;