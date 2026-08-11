import app from "./index.js"
import "dotenv/config";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 8080;


app.listen(PORT,async()=>{
    await connectDB();
    console.log(" server start on port :" ,PORT)
})