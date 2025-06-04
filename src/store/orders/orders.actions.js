import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOrders } from "../../api/orders";

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
