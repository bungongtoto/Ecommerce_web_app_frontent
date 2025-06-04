import API from "./client";

export const createCheckoutSession = async () => {
  try {
    const response = await API.post("/cart/create-checkout-session");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const checkout = async ({ session_id }) => {
  try {
    const response = await API.get(`/cart/checkout?session_id=${session_id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
