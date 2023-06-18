import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  order: [],
};

const slice = createSlice({
  name: "order",
  initialState,
  reducers: {
    HANDLE_LOADING: (state, action) => {
      state.isLoading = action.payload;
    },
    HANDLE_SET_ORDER: (state, action) => {
      state.order = action.payload;
    },
  
  },
});

const { reducer, actions } = slice;

export const {
  HANDLE_LOADING,
  HANDLE_SET_ORDER,


} = actions;

export default reducer;
