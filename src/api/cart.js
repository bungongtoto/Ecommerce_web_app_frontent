import API from "./client";

export const getCart = async () => {
  try {
    const response = await API.get("/cart");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addToCart = async (productDetails) => {
  try {
    const response = await API.post("/cart", productDetails);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteItem = async (product_id) => {
  try {
    const response = await API.delete(`/cart/product/${product_id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateItem = async ({ product_id, ...updates }) => {
  try {
    const response = await API.put(`/cart/product/${product_id}`, updates);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
