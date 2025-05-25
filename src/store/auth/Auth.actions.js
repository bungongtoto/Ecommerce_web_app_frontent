import { createAsyncThunk } from "@reduxjs/toolkit";
import { register } from "../../api/auth";

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
