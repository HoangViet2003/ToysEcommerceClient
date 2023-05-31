import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

const rootReducer = {
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
};

export default configureStore({
  reducer: rootReducer,
});
