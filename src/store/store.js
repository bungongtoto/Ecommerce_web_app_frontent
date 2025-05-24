import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const setUpStore = (preloadedState) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export default setUpStore;
