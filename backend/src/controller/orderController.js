import { createOrder,
  placeOrder,
  confirmedOrder,
  shipOrder,
  deliverOrder,
  cancelledOrder,
  findOrderById,
  usersOrderHistory,
  getALLOrders,
  deleteOrder,} from "../services/orderService.js"

  const createOrder = async(req,res)=>{
    const user= req.user;
    try {
        let createdOrder= await createOrder(user,req.body);
        return res.status(201).send(createOrder);
    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }
  };


    const findOrderById = async(req,res)=>{
    const user= req.user;
    try {
        let findOrderById= await findOrderById(req.params.id);
        return res.status(201).send(findOrderById);
    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }
  };


    const orderHistory = async(req,res)=>{
    const user= req.user;
    try {
        let createdOrder= await usersOrderHistory(user._id);
        return res.status(201).send(createOrder);
    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }
  };

  export {createOrder,findOrderById,orderHistory}