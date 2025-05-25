import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/Auth.reducers";

export default combineReducers({
  auth: authReducer,
});
