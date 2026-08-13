import mongoose from "mongoose";


const chartSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    cartItem:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CartItem",
        required:true
    }],
    totalPrice:{
        type:Number,
        required:true,
        default:0
    },
    totalItem:{
     type:Number,
     required:true,
     default:0
    },
    totalDiscountedPrice:{
        type:Number,
        required:true,
        default:0
    },
    discounte:{
        type:Number,
        required:true,
        default:0
    },



});

const Cart = mongoose.model("Cart",chartSchema);
export default Cart;