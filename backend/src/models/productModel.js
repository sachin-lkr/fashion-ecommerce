import mongoose, { Schema } from "mongoose"

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discountedPrice:{
        type:Number,
       
    },
     discountedPersent:{
            type:Number,
            
    },
    quantity:{
        type:Number,
        required:true,
    },
    brand:{
        type :String,
    },
    color:{
        type:String,
    },
    size:[
        {
            name:{type:String},
            quantity:{type:Number},
        }

    ],
    imageUrl:{
        type:String,
    },
    ratings:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Rating"
        },
    ],
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Rewiew"
        }
    ],
    numberRatings:{
        type:Number,
        default:0,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
});
const Product = mongoose.model("Product",productSchema);
export default Product;