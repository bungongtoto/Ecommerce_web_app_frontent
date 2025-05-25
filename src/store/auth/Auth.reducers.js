import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./Auth.actions";

const initialState = {
  isFetching: false,
  isSuccess: false,
  isAunthenticated: false,
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
        state.isAunthenticated = false;
        state.isSuccess = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { isAuthenticated } = action.payload;
        state.error = null;
        state.isFetching = false;
        state.isAunthenticated = isAuthenticated;
      })
      .addCase(loginUser.rejected, (state, action) => {
        const { error } = action.payload;
        state.error = error;
        state.isFetching = false;
        state.isAunthenticated = false;
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
      });
  },
});

export default authSlice.reducer;
