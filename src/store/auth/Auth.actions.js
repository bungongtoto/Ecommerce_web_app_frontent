import { createAsyncThunk } from "@reduxjs/toolkit";
import { isLoggedIn, login, logout, register } from "../../api/auth";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (credentials, thunkAPI) => {
    try {
      await register(credentials);
      return {};
    } catch (error) {
      //   console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, thunkAPI) => {
    try {
      const response = await login(credentials);
      return { user: response, isAuthenticated: true };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (param, thunkAPI) => {
    try {
      const response = await logout();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const checkLoggedInStatus = createAsyncThunk(
  "auth/checkLoggedInStatus",
  async (param, thunkAPI) => {
    try {
      const response = await isLoggedIn();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
