import {findUserCart,addCartItem} from "../services/cartService.js"

const findUserCart = async(req,res)=>{
    const user = req.user;
    try {
      const cart = await findUserCart(user._id)
      return req.status(200).send(cart)
        
    } catch (error) {
        return req.status(500).send({error:error.message});
        
    }
};

const addItemToCart = async(req,res)=>{
    const user = req.user;
    try {
      const cartItem = await addCartItem(user._id,req.body)
      return req.status(200).send(cartItem)
        
    } catch (error) {
        return req.status(500).send({error:error.message});
        
    }
};

export {findUserCart,addItemToCart};