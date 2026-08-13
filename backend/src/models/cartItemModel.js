 import mongoose from "mongoose";
 const cartItemSchema = new mongoose.Schema({
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Cart",
        required:true,

    },
     quantity:{
        type:Number,
        required:true,
        default:1,
    },
    product:{
         type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true,
    },
     discountedPrice:{
        type:Number,
        required:true
    },
    size:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    userId:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"User",
         required:true
    }
 });

 const CartItem = mongoose.model("CartItem",cartItemSchema);
 export default CartItem;