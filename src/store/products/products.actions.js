import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPopular } from "../../api/products";

export const fetchPopularProducts = createAsyncThunk(
  "products/getPopularProducts",
  async (param, thunkAPI) => {
    try {
      const response = await getPopular();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
