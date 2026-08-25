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

  const createOrderController = async(req,res)=>{
    const user= req.user;
    try {
        let createdOrder= await createOrder(user,req.body);
        return res.status(201).send(createOrder);
    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }
  };


    const findOrderByIdController = async(req,res)=>{
    const user= req.user;
    try {
        let findOrderById= await findOrderById(req.params.id);
        return res.status(201).send(findOrderById);
    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }
  };


    const orderHistoryController = async(req,res)=>{
    const user= req.user;
    try {
        let createdOrder= await usersOrderHistory(user._id);
        return res.status(201).send(createOrder);
    } catch (error) {
        return res.status(500).send({error:error.message});
        
    }
  };

  export {createOrderController,findOrderByIdController,orderHistoryController}