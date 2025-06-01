import { createSlice } from "@reduxjs/toolkit";
import { addProductTocart } from "./cart.actions";

const initialState = {
  cart: null,
  totalPrice: 0,
  totalQuantity: 0,
  iscartFetching: false,
  cartError: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProductTocart.pending, (state, action) => {
        state.iscartFetching = true;
        state.cartError = null;
      })
      .addCase(addProductTocart.fulfilled, (state, action) => {
        state.iscartFetching = false;
        state.cartError = null;
      })
      .addCase(addProductTocart.rejected, (state, action) => {
        const { error } = action.payload;
        state.iscartFetching = false;
        state.cartError = error;
      });
  },
});

export default cartSlice.reducer;
