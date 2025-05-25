import API from "./client";

export const register = async (credentials) => {
  try {
    const response = await API.post("/auth/register", credentials);
    return response;
  } catch (error) {
    throw error.response.data;
  }
};
