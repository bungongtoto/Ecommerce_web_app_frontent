import { createSlice } from "@reduxjs/toolkit";
import { fetchOrderItems, fetchOrders } from "./orders.actions";

const initialState = {
  orders: null,
  isOrdersFetching: false,
  ordersError: null,
  viewOrder: {
    order: null,
    isOrderFetching: false,
    orderError: null,
  },
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
        state.orders = null;
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
      })
      .addCase(fetchOrderItems.pending, (state, action) => {
        state.viewOrder.isOrderFetching = true;
        state.viewOrder.orderError = null;
        state.viewOrder.order = null;
      })
      .addCase(fetchOrderItems.fulfilled, (state, action) => {
        const { order } = action.payload;
        state.viewOrder.order = order;
        state.viewOrder.isOrderFetching = false;
        state.viewOrder.orderError = null;
      })
      .addCase(fetchOrderItems.rejected, (state, action) => {
        const { error } = action.payload;
        state.viewOrder.isOrderFetching = false;
        state.viewOrder.orderError = error;
      });
  },
});

export default ordersSlice.reducer;
