import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./Auth.actions";

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
