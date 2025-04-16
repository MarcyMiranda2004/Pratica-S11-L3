import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/index.js";

const Store = configureStore({
  reducers: mainReducer,
});

export default Store;
