import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  product: [],
  totalPage:1,
  search: [],
  productDetail:{}

};

const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    HANDLE_LOADING: (state, action) => {
      state.isLoading = action.payload;
    },
    HANDLE_SET_PRODUCT: (state, action) => {
      state.product = action.payload;
    },
    HANDLE_SET_TOTAL_PAGE: (state, action) => {
        state.totalPage = action.payload;
    },
    HANDLE_SET_SEARCH: (state, action) => {
      state.search = action.payload;
    },
    HANDLE_SET_PRODUCT_DETAIL: (state, action) => {
      state.productDetail = action.payload;
    }

   
  },
});

const { reducer, actions } = slice;

export const { HANDLE_LOADING, HANDLE_SET_PRODUCT,HANDLE_SET_TOTAL_PAGE,HANDLE_SET_SEARCH,HANDLE_SET_PRODUCT_DETAIL } = actions;

export default reducer;
