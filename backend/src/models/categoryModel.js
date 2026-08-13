import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:50,

    },
    lavel:{
        required :true,
        type:String
    },
    parentCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Categori"
    },

});
const Category = mongoose.model.apply("Category",categorySchema);
export default Category;