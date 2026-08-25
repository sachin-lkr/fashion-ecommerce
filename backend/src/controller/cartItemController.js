import {updateCartItems,removeCartItem} from "../services/cartItemsService.js";


const updateCartItemController=async(req,res)=>{

    const user = req.user
  try {
    const updatedCartItem = await updateCartItems(user._id,req.params.id,req.body);
    return req.status(200).send(updatedCartItem)
  } catch (error) {

    return res.status(500).send({error:error.message});
    
  }
};


const removeCartItemController=async(req,res)=>{

    const user = req.user
  try {
     await removeCartItem(user._id,req.params.id);
    return req.status(200).send({message:"cart item removed successfully"})
  } catch (error) {

    return res.status(500).send({error:error.message});
    
  }
};

export{updateCartItemController,removeCartItemController};


