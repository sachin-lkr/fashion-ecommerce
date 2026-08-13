import mongoose  from "mongoose";

const orderSchema = new mongoose.Schema({
    name:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"User"
    },
    orderDate:{
        type:Date,
        required:true,
        default:Date.now
    },
    orderItem:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"OrderItem"
    },
    deliveryDate:{
        type:Date,

    },
    shippingAddress:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"Address"
    },
    paymentDetails:{
        paymentMethos:{
            type:String,
        },
        paymentStatus:{
         type:String,
         default:"pending"
        },
        transactionId:{
            type:String,
        },
        paymentId:{
            type:String,
        },
        
    },
    totalPrice:{
        type:Number,
        required:true,
    },
    totalDiscountedPrice:{
        type:Number,
        required:true
    },
    totalItem:{
        type:Number,
        reuired:true,
    },
    orderStatus:{
        type:String,
        required:true,
        default:"pending"
    },
    createAt:{
        type:Date,
        default:Date.now,
    },
});

const Order= mongoose.model("Order",orderSchema);
export default Order;