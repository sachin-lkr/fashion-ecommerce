import Rating from "../models/ratingModel.js"

import {findProductById,} from "../services/productService.js"


const createRating = async (req,user)=>{
 const product= await findProductById(req.productId);
 const rating = new Rating({
    product:product._id,
    user:user.id,
    rating:req.rating,
    createdAt:new Date(),
 })
 return  await rating.save();
};

const getProductRating= async(productId)=>{
    return await Rating.find({product:productId});
};


export {createRating,getProductRating};