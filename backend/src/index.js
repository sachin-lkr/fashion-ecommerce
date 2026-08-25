import express from "express"
import authRouters from "./routes/authRoutes.js";
import userRouters from "./routes/userRoute.js"
import productRoutes from "./routes/productRoutes.js"
import adminProductsRouter from "./routes/productAdminRoutes.js"
import adminOrderRouter from "./routes/adminRoutes.js";
import cartItemsRouter from "./routes/cartItemsRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import ratingRouter from "./routes/ratingRoutes.js";
import reviewRouter from "./routes/reviewRoutes.js";

import cors from "cors"
const app=express();

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    return res.status(200).send({message:"welcome to e-commerce api", status:true})
})

app.use("/auth",authRouters);
app.use("/api/users",userRouters);
app.use("/api/products",productRoutes);
app.use("/api/admin/products",adminProductsRouter);
app.use("/api/cart",cartRouter);
app.use("/api/cart_items",cartItemsRouter);
app.use("/api/orders",orderRouter);
app.use("api/reviews",reviewRouter);
app.use("api/ratings",ratingRouter);
app.use("/api/admin/orders",adminOrderRouter);


export default app;