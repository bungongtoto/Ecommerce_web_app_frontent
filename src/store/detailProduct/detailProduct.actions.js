import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductById } from "../../api/products";

export const fetchProductById = createAsyncThunk(
  "detailProduct/fetchProductById",
  async (id, thunkAPI) => {
    try {
      const response = await getProductById(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
