import API from "./client";

export const getProductReviews = async (product_id) => {
  try {
    const response = await API.get(`/products/${product_id}/reviews`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createProductReview = async ({ product_id, ...review }) => {
  try {
    const response = await API.post(`/products/${product_id}/reviews`, review);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
