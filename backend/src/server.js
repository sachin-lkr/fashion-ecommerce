import app from "./index.js"
import "dotenv/config";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 8080;

 await connectDB();
app.listen(PORT,async()=>{
    
    console.log(" server start on port :" ,PORT)
})

