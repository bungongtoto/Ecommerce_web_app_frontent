import API from "./client";

export const fetchCategories = async () => {
  try {
    const response = await API.get("/categories");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
