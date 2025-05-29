import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories } from "../../api/categories";

export const fetchProductCategories = createAsyncThunk(
  "categories/fetchProductCategories",
  async (param, thunkAPI) => {
    try {
      const response = await fetchCategories();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
