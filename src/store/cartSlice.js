import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  cart: [],
  totalAmount: 0,
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    HANDLE_LOADING: (state, action) => {
      state.isLoading = action.payload;
    },
    HANDLE_SET_CART: (state, action) => {
      state.cart = action.payload;
    },
    HANDLE_SET_TOTAL_AMOUNT: (state, action) => {
      state.totalAmount = action.payload;
    },
    DELETE_PRODUCT_FROM_CART: (state, action) => {

      state.cart = state.cart.filter((item) => item.product_id !== action.payload);
    },
    HANDLE_REMOVE_ALL_PRODUCT_FROM_CART: (state, action) => {
      state.cart = [];
    }
  },
});

const { reducer, actions } = slice;

export const { HANDLE_LOADING, HANDLE_SET_CART, HANDLE_SET_TOTAL_AMOUNT,DELETE_PRODUCT_FROM_CART,HANDLE_REMOVE_ALL_PRODUCT_FROM_CART } =
  actions;

export default reducer;
