import { createSlice } from "@reduxjs/toolkit";
import { fetchOrders } from "./orders.actions";

const initialState = {
  orders: null,
  isOrdersFetching: false,
  ordersError: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state, action) => {
        state.isOrdersFetching = true;
        state.ordersError = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        const { orders } = action.payload;
        state.orders = orders;
        state.ordersError = null;
        state.isOrdersFetching = false;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        const { error } = action.payload;
        state.ordersError = error;
        state.isOrdersFetching = false;
      });
  },
});

export default ordersSlice.reducer;
