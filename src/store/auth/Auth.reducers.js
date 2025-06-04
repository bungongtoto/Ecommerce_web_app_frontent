import { createSlice } from "@reduxjs/toolkit";
import {
  checkLoggedInStatus,
  loginUser,
  logoutUser,
  registerUser,
} from "./Auth.actions";

const initialState = {
  isLoading: false,
  isFetching: false,
  isSuccess: false,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.error = null;
        state.isFetching = true;
        state.isAuthenticated = false;
        state.isSuccess = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { isAuthenticated } = action.payload;
        state.error = null;
        state.isFetching = false;
        state.isAuthenticated = isAuthenticated;
      })
      .addCase(loginUser.rejected, (state, action) => {
        const { error } = action.payload;
        state.error = error;
        state.isFetching = false;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.pending, (state, action) => {
        state.isFetching = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        const { error } = action.payload;
        state.isFetching = false;
        state.isSuccess = false;
        state.error = error;
      })
      .addCase(checkLoggedInStatus.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(checkLoggedInStatus.fulfilled, (state, action) => {
        const { isAuthenticated } = action.payload;
        state.isAuthenticated = isAuthenticated;
        state.isLoading = false;
      })
      .addCase(checkLoggedInStatus.rejected, (state, action) => {
        const { isAuthenticated } = action.payload;
        state.isAuthenticated = isAuthenticated;
        state.isLoading = false;
      })
      .addCase(logoutUser.pending, (state, action) => {
        state.error = null;
        state.isFetching = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        const { isAuthenticated } = action.payload;
        state.error = null;
        state.isFetching = false;
        state.isAuthenticated = isAuthenticated;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        const { error } = action.payload;
        state.error = error;
        state.isFetching = false;
      });
  },
});

export default authSlice.reducer;
