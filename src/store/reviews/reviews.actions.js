import { createAsyncThunk } from "@reduxjs/toolkit";
import { createProductReview, getProductReviews } from "../../api/reviews";

export const fetchProductReviews = createAsyncThunk(
  "reviews/fetchProductReviews",
  async (product_id, thunkAPI) => {
    try {
      const response = await getProductReviews(product_id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postProductReview = createAsyncThunk(
  "reviews/postProductReview",
  async (params, thunkAPI) => {
    try {
      const reponse = await createProductReview(params);
      return reponse;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
