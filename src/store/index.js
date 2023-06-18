import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice";

const rootReducer = {
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
};

export default configureStore({
  reducer: rootReducer,
});
