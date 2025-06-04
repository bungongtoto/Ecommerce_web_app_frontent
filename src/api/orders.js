import API from "./client";

export const getOrders = async () => {
  try {
    const response = await API.get("/orders");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getOrderItems = async (order_id) => {
  try {
    const response = await API.get(`/orders/${order_id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
