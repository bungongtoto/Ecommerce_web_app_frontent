import { createSlice } from "@reduxjs/toolkit";
import {
  addProductTocart,
  checkoutCart,
  deleteProductFromCart,
  fetchUserCart,
  updateProductFromCart,
} from "./cart.actions";
/**
 * Do uptimize this page by making sure instead of refreshing the whole page you can update each product only when it is manipulated
 */

const initialState = {
  cart: null,
  totalPrice: 0,
  totalQuantity: 0,
  iscartFetching: false,
  isAddProductLoading: false,
  isDeleteProductLoading: false,
  isUpdateProductLoading: false,
  cartError: null,
  addProductError: null,
  deleteProductError: null,
  updateProductError: null,
  checkout: { isCheckingOut: false, checkoutError: null, status: null },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addQuantity: (state, action) => {
      const { product_id } = action.payload;
      console.log("ID: ", product_id);
      const cartIndex = state.cart.findIndex(
        (cartItem) => cartItem.product_id === product_id
      );
      console.log("Index: ", cartIndex);
      const cartItem = state.cart[cartIndex];
      state.totalQuantity++;
      console.log("Item: ", cartItem);
      const value = parseFloat(cartItem.product_details.unit_price.slice(1));
      state.totalPrice = parseFloat(state.totalPrice) + value;
    },
    subTractQuantity: (state, action) => {
      const { product_id } = action.payload;
      const cartIndex = state.cart.findIndex(
        (cartItem) => cartItem.product_id === product_id
      );
      const cartItem = state.cart[cartIndex];
      state.totalQuantity--;
      const value = parseFloat(cartItem.product_details.unit_price.slice(1));
      state.totalPrice = parseFloat(state.totalPrice) - value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCart.pending, (state, action) => {
        state.iscartFetching = true;
        state.cartError = null;
      })
      .addCase(fetchUserCart.fulfilled, (state, action) => {
        const { cart, totalQuantity, totalPrice } = action.payload;
        state.cart = cart;
        state.totalQuantity = totalQuantity;
        state.totalPrice = totalPrice;
        state.iscartFetching = false;
        state.cartError = null;
      })
      .addCase(fetchUserCart.rejected, (state, action) => {
        const { error } = action.payload;
        state.iscartFetching = false;
        state.cartError = error;
      })
      .addCase(addProductTocart.pending, (state, action) => {
        state.isAddProductLoading = true;
        state.addProductError = null;
      })
      .addCase(addProductTocart.fulfilled, (state, action) => {
        state.isAddProductLoading = false;
        state.addProductError = null;
      })
      .addCase(addProductTocart.rejected, (state, action) => {
        const { error } = action.payload;
        state.isAddProductLoading = false;
        state.addProductError = error;
      })
      .addCase(deleteProductFromCart.pending, (state, action) => {
        state.isDeleteProductLoading = true;
        state.deleteProductError = null;
      })
      .addCase(deleteProductFromCart.fulfilled, (state, action) => {
        state.isDeleteProductLoading = false;
        state.deleteProductError = null;
      })
      .addCase(deleteProductFromCart.rejected, (state, action) => {
        const { error } = action.payload;
        state.deleteProductError = error;
        state.isDeleteProductLoading = false;
        state.deleteProductError = null;
      })
      .addCase(updateProductFromCart.pending, (state, action) => {
        state.isUpdateProductLoading = true;
        state.updateProductError = null;
      })
      .addCase(updateProductFromCart.fulfilled, (state, action) => {
        state.isUpdateProductLoading = false;
        state.updateProductError = null;
      })
      .addCase(updateProductFromCart.rejected, (state, action) => {
        const { error } = action.payload;
        state.isUpdateProductLoading = false;
        state.updateProductError = error;
      })
      .addCase(checkoutCart.pending, (state, action) => {
        state.checkout.isCheckingOut = true;
        state.checkout.checkoutError = null;
        state.checkout.status = null;
      })
      .addCase(checkoutCart.fulfilled, (state, action) => {
        const { status } = action.payload;
        state.checkout.isCheckingOut = false;
        state.checkout.checkoutError = null;
        state.checkout.status = status;
      })
      .addCase(checkoutCart.rejected, (state, action) => {
        const { error } = action.payload;
        state.checkout.isCheckingOut = false;
        state.checkout.checkoutError = error;
        state.checkout.status = null;
      });
  },
});

export const { addQuantity, subTractQuantity } = cartSlice.actions;

export default cartSlice.reducer;
