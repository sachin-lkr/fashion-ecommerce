import {createRating,getProductRating} from "../services/ratingService";

const createRating = async(req,res)=>{
    const user = req.user;
    try {
        const rating = await createRating(req.body,user);
        return req.status(201).send(rating);
        
    } catch (error) {
        return res.status(500).send({error:error.message});


        
    }

};


const getAllRating = async(req,res)=>{
    const productId = req.params.productId
    const user = req.user;
    try {
        const ratings = await getProductRating(productId);
        return req.status(201).send(ratings);
        
    } catch (error) {
        return res.status(500).send({error:error.message});

        
        
    }

};

export {createRating,getAllRating}