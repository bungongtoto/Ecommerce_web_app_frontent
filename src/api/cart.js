import API from "./client";

export const addToCart = async (productDetails) => {
  try {
    const response = await API.post("/cart", productDetails);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
