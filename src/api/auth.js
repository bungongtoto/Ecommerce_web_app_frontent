import API from "./client";

export const register = async (credentials) => {
  try {
    const response = await API.post("/auth/register", credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (credentials) => {
  try {
    const response = await API.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = async () => {
  try {
    const response = await API.get("/auth/logout");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const isLoggedIn = async () => {
  try {
    const response = await API.get("/auth/logged_in");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
