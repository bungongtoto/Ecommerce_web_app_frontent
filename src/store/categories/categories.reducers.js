import { createSlice } from "@reduxjs/toolkit";
import { fetchProductCategories } from "./categories.actions";

const initialState = {
  categories: null,
  categoriesError: null,
  isCategoriesFetching: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductCategories.pending, (state, action) => {
        state.categoriesError = null;
        state.isCategoriesFetching = true;
      })
      .addCase(fetchProductCategories.fulfilled, (state, action) => {
        const { categories } = action.payload;
        state.isCategoriesFetching = false;
        state.categoriesError = null;
        state.categories = categories;
      })
      .addCase(fetchProductCategories.rejected, (state, action) => {
        const { error } = action.payload;
        state.categoriesError = error;
        state.isCategoriesFetching = false;
      });
  },
});

export default categoriesSlice.reducer;
