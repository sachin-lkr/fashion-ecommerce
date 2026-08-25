import {findUserCart,addCartItem} from "../services/cartService.js"

const findUserCartController = async(req,res)=>{
    const user = req.user;
    try {
      const cart = await findUserCart(user._id)
      return req.status(200).send(cart)
        
    } catch (error) {
        return req.status(500).send({error:error.message});
        
    }
};

const addItemToCartController = async(req,res)=>{
    const user = req.user;
    try {
      const cartItem = await addCartItem(user._id,req.body)
      return req.status(200).send(cartItem)
        
    } catch (error) {
        return req.status(500).send({error:error.message});
        
    }
};

export {findUserCartController,addItemToCartController};