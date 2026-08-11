import mongoose  from "mongoose";


const addressSchema = new mongoose.Schema({
    fullName: {
    type: String,
    required: true,
  },

  mobile: {
    type: String,
    required: true,
  },

  street: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  state: {
    type: String,
    required: true,
  },

  pincode: {
    type: Number,
    required: true,
  },
  user:{
    type :mongoose.Schema.ObjectId,
    ref:"user"
  }
})

const Address =mongoose.model("Address",addressSchema);
export default Address;