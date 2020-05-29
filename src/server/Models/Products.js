import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: true,
            unique: true
        },
        price: {
            type: Number, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        quantity: {
            type: Number, 
            required: true
        }
    }
)

const Products = mongoose.model('Product', productSchema)

export default Products;