import express from "express"
import authRouters from "./routes/authRoutes.js";
import userRouters from "./routes/userRoute.js"
import cors from "cors"
const app=express();

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    return res.status(200).send({message:"welcome to e-commerce api", status:true})
})

app.use("/auth",authRouters);
app.use("/api/users",userRouters);

export default app;

