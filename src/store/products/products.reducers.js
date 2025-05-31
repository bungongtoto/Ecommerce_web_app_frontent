import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularProducts } from "./products.actions";

const initialState = {
  products: null,
  isProductsFetching: false,
  errorProducts: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularProducts.pending, (state, action) => {
        state.isProductsFetching = true;
        state.errorProducts = null;
      })
      .addCase(fetchPopularProducts.fulfilled, (state, action) => {
        const { products } = action.payload;
        state.products = products;
        state.isProductsFetching = false;
        state.errorProducts = null;
      })
      .addCase(fetchPopularProducts.rejected, (state, action) => {
        const { error } = action.payload;
        state.isProductsFetching = false;
        state.errorProducts = error;
      });
  },
});

export default productsSlice.reducer;
