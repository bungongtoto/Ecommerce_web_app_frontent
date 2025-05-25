import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../api/auth";

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
      return { isAuthenticated: true };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
