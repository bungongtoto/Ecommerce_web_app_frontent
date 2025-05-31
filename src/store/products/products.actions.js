import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPopular, getProductsByCategoryId } from "../../api/products";

export const fetchPopularProducts = createAsyncThunk(
  "products/fetchPopularProducts",
  async (param, thunkAPI) => {
    try {
      const response = await getPopular();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchProductsByCategoryId = createAsyncThunk(
  "products/fetchProductsByCategoryId",
  async (category_id, thunkAPI) => {
    try {
      const response = await getProductsByCategoryId(category_id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
