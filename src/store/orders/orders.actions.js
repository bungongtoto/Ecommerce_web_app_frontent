import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOrderItems, getOrders } from "../../api/orders";

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (params, thunkAPI) => {
    try {
      const response = await getOrders();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchOrderItems = createAsyncThunk(
  "orders/fetchOrderItems",
  async (order_id, thunkAPI) => {
    try {
      const response = await getOrderItems(order_id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
