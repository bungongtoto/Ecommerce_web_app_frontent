import { createSlice } from "@reduxjs/toolkit";
import { fetchProductReviews, postProductReview } from "./reviews.actions";

const initialState = {
  reviews: null,
  isReviewsFetching: false,
  reviewsError: null,
  isPostingReview: false,
  postingReviewError: null,
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductReviews.pending, (state, action) => {
        state.isReviewsFetching = true;
        state.reviewsError = null;
        state.reviews = null;
      })
      .addCase(fetchProductReviews.fulfilled, (state, action) => {
        const { reviews } = action.payload;
        state.isReviewsFetching = false;
        state.reviewsError = null;
        state.reviews = reviews;
      })
      .addCase(fetchProductReviews.rejected, (state, action) => {
        const { error } = action.payload;
        state.isReviewsFetching = false;
        state.reviewsError = error;
      })
      .addCase(postProductReview.pending, (state, action) => {
        state.isPostingReview = true;
        state.postingReviewError = null;
      })
      .addCase(postProductReview.fulfilled, (state, action) => {
        state.isPostingReview = false;
        state.postingReviewError = null;
      })
      .addCase(postProductReview.rejected, (state, action) => {
        const { error } = action.payload;
        state.isPostingReview = false;
        state.postingReviewError = error;
      });
  },
});

export default reviewSlice.reducer;
