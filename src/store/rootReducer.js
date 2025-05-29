import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/Auth.reducers";
import userReducer from "./user/User.reducers";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
});
