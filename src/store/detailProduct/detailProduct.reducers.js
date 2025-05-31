import { createSlice } from "@reduxjs/toolkit";
import { fetchProductById } from "./detailProduct.actions";

const initialState = {
  product: null,
  isProductLoading: false,
  errorProduct: null,
};

const detailProductSlice = createSlice({
  name: "detailProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state, action) => {
        state.isProductLoading = true;
        state.errorProduct = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        const { product } = action.payload;
        state.product = product;
        state.errorProduct = null;
        state.isProductLoading = false;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        const { error } = action.payload;
        state.isProductLoading = false;
        state.errorProduct = error;
      });
  },
});

export default detailProductSlice.reducer;
