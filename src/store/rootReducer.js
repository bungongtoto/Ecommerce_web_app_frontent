import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/Auth.reducers";
import userReducer from "./user/User.reducers";
import categoriesReducer from "./categories/categories.reducers";
import productsReducer from "./products/products.reducers";
import detailProductReducer from "./detailProduct/detailProduct.reducers";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  categories: categoriesReducer,
  products: productsReducer,
  detailProduct: detailProductReducer,
});
