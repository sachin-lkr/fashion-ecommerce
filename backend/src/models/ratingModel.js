import mongoose from "mongoose";

const ratingSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true,
    },
    rating:{
        type:Number,
        required:true,

    },
    createAt:{
        type:Date,
        default:Date.now(),
    },

});

const Rating = mongoose.model.apply('Rating',ratingSchema);
export default Rating;