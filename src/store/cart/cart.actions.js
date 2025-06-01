import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToCart } from "../../api/cart";

export const addProductTocart = createAsyncThunk(
  "cart/addProductToCart",
  async (productDetails, thunkAPI) => {
    try {
      const response = await addToCart(productDetails);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
