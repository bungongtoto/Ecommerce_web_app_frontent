import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToCart, deleteItem, getCart, updateItem } from "../../api/cart";

export const fetchUserCart = createAsyncThunk(
  "cart/fetchUserCart",
  async (params, thunkAPI) => {
    try {
      const response = await getCart();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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

export const deleteProductFromCart = createAsyncThunk(
  "cart/deleteProductFromCart",
  async (product_id, thunkAPI) => {
    try {
      const response = await deleteItem(product_id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateProductFromCart = createAsyncThunk(
  "cart/updateProductFromCart",
  async (param, thunkAPI) => {
    try {
      const response = await updateItem(param);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
