import mongoose, { models }  from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
         type:String,
        required:true
    },
    password:{
         type:String,
        required:true
    },
    email:{
         type:String,
        required:true
    },
    role:{
         type:String,
        required:true,
        default:"CUSTOMER"
    },
    mobile:{
        type:String
    },
    address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address"
    }],
    paymentInformation:[
        {
             type:mongoose.Schema.Types.ObjectId,
             ref:"Payment_Information"
        }
    ],
    ratings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Rating"
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Rating"
    }],
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const User =mongoose.model("User",userSchema);
export default User;