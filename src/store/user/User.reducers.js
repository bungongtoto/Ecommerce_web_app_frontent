import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUserDetails,
  updateUserAddress,
  UpdateUserDetails,
} from "./User.actions";

const initialState = {
  user: null,
  address: null,
  isFetching: false,
  isUserUpdating: false,
  isAddressUpdating: false,
  error: null,
  errorUpdateUser: null,
  errorUpdateAddress: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state, action) => {
        state.isFetching = true;
        state.error = null;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        const { address, ...user } = action.payload.user;
        state.isFetching = false;
        state.error = null;
        state.user = user;
        state.address = address;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        const { error } = action.payload;
        state.isFetching = false;
        state.error = error;
      })
      .addCase(UpdateUserDetails.pending, (state, action) => {
        state.errorUpdateUser = null;
        state.isUserUpdating = true;
      })
      .addCase(UpdateUserDetails.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.isUserUpdating = false;
        state.errorUpdateUser = null;
        state.user = user;
      })
      .addCase(UpdateUserDetails.rejected, (state, action) => {
        const { error } = action.payload;
        state.isUserUpdating = false;
        state.errorUpdateUser = error;
      })
      .addCase(updateUserAddress.pending, (state, action) => {
        state.errorUpdateAddress = null;
        state.isAddressUpdating = true;
      })
      .addCase(updateUserAddress.fulfilled, (state, action) => {
        const { address } = action.payload;
        state.isAddressUpdating = false;
        state.errorUpdateAddress = null;
        state.address = address;
      })
      .addCase(updateUserAddress.rejected, (state, action) => {
        const { error } = action.payload;
        state.isAddressUpdating = false;
        state.errorUpdateAddress = error;
      });
  },
});

export default userSlice.reducer;
