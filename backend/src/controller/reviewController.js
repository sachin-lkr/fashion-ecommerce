import {createReview,getAllReview} from "../services/reviewService.js";

const createReview = async(req,res)=>{
    const user = req.user;
    try {
        const review = await createReview(req.body,user);
        return req.status(201).send(review);
        
    } catch (error) {
        return res.status(500).send({error:error.message});


        
    }

};


const getAllReview = async(req,res)=>{
    const productId = req.params.productId
    const user = req.user;
    try {
        const reviews = await getAllReview(productId);
        return req.status(201).send(reviews);
        
    } catch (error) {
        return res.status(500).send({error:error.message});

        
        
    }

};

export {createReview,getAllReview}