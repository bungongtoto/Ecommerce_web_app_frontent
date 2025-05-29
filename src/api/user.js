import API from "./client";

export const getUser = async () => {
  try {
    const response = await API.get("/user");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const UpdateUser = async (updates) => {
  try {
    const response = await API.put("/user", updates);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateAddress = async (updates) => {
  try {
    const response = await API.put("/user/address", updates);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
