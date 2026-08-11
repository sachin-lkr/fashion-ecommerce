import mongose from "mongoose"

const connectDB = async()=>{
    try {
       await mongose.connect(process.env. MONGODB_URL)
       console.log("MongoDB connected successfully")
    } catch (error) {
          console.error("MongoDB connection failed:", error.message);
    }
}
export default connectDB;