import mongoose, { Schema } from "mongoose";


const orderSchema = new Schema({
    email :{
        type: String,
        required: [true, "email is required"]
    }, 
    product : {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "product is required"]
    },
    quantity : {
        type: Number,
        required: [true, "quantity is required"]
    },
    totalPrice : {
        type: Number,
        required: [true, "totalPrice is required"]
    }
})

// Create and export the Order model
export const OrderModel = mongoose.model('Order', orderSchema);