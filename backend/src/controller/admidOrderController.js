import {
  confirmedOrder,
  shipOrder,
  deliverOrder,
  cancelledOrder,
  getALLOrders,
  deleteOrder,
} from "../services/orderService.js";

const getALLOrders = async (req, res) => {
  try {
    const orders = await getALLOrders();
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const confirmedOrder = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await confirmedOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const shipOrder = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await shipOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deliverOrder = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await deliverOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const cancelledOrder = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await cancelledOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await deleteOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export {
  confirmedOrder,
  getALLOrders,
  shipOrder,
  deliverOrder,
  cancelledOrder,
  deleteOrder,
};
