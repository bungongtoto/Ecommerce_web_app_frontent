import API from "./client";

export const getPopular = async () => {
  try {
    const response = await API.get("/products/popular");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await API.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
