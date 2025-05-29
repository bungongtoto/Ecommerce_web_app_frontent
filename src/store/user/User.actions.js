import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser, updateAddress, UpdateUser } from "../../api/user";

export const fetchUserDetails = createAsyncThunk(
  "user/fetchUserDetails",
  async (param, thunkAPI) => {
    try {
      const response = await getUser();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const UpdateUserDetails = createAsyncThunk(
  "user/updateUserDetails",
  async (updates, thunkAPI) => {
    try {
      const response = await UpdateUser(updates);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUserAddress = createAsyncThunk(
  "user/updateUserAddress",
  async (updates, thunkAPI) => {
    try {
      const response = await updateAddress(updates);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
