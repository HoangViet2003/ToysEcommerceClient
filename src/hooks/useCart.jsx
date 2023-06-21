import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../utils/axios";
import { POST_API, GET_API, DELETE_API, UPDATE_API } from "../utils/api";
import {
  HANDLE_SET_CART,
  HANDLE_SET_TOTAL_AMOUNT,
  DELETE_PRODUCT_FROM_CART,
  HANDLE_REMOVE_ALL_PRODUCT_FROM_CART,
  HANDLE_LOADING,
} from "../store/cartSlice";
import { enqueueSnackbar } from "notistack";

export const useCart = () => {
  const dispatch = useDispatch();
  const { isLoading, cart, totalAmount } = useSelector((state) => state.cart);

  const handleGetCart = async () => {
    dispatch(HANDLE_LOADING(true));

    try {
      const res = await axiosInstance.get(GET_API({}).getCartByUserId);
      if (res.data) {
        dispatch(HANDLE_SET_CART(res.data.cartItems));
        console.log(res);
        dispatch(HANDLE_SET_TOTAL_AMOUNT(res.data.totalAmount));
      }
      dispatch(HANDLE_LOADING(false));
    } catch (err) {
      dispatch(HANDLE_LOADING(false));

      console.log(err);
    }
  };

  const handleAddToCart = async (data) => {
    dispatch(HANDLE_LOADING(true));

    try {
      if (localStorage.getItem("accessToken") === null) {
        enqueueSnackbar("Please login to continue", { variant: "error" });
        return;
      }
      const res = await axiosInstance.post(POST_API().addToCart, data);
      if (res.data) {
        enqueueSnackbar("Add to cart successfully", {
          variant: "success",
        });

        console.log(res.data);
      }
      dispatch(HANDLE_LOADING(false));
    } catch (err) {
      dispatch(HANDLE_LOADING(false));

      console.log(err);
    }
  };

  const handleDeleteProductFromCart = async (product_id) => {
    dispatch(HANDLE_LOADING(true));

    try {
      await axiosInstance
        .delete(DELETE_API(product_id).deleteProductFromCart)
        .then((res) => {
          console.log(res);
          console.log(product_id);
          dispatch(DELETE_PRODUCT_FROM_CART(product_id));
          handleGetCart();
        });
      dispatch(HANDLE_LOADING(false));
    } catch (err) {
      dispatch(HANDLE_LOADING(false));

      console.log(err);
    }
  };

  const handleDeleteAllProductFromCart = async () => {
    dispatch(HANDLE_LOADING(true));

    try {
      await axiosInstance
        .delete(DELETE_API().deleteAllProductFromCart)
        .then((res) => {
          dispatch(HANDLE_REMOVE_ALL_PRODUCT_FROM_CART());
          console.log(res);
        });
      dispatch(HANDLE_LOADING(false));
    } catch (err) {
      dispatch(HANDLE_LOADING(false));

      console.log(err);
    }
  };

  const handleUpdateQuantity = async (product_id, itemQuantity) => {
    dispatch(HANDLE_LOADING(true));

    try {
      await axiosInstance
        .put(UPDATE_API(product_id).updateQuantity, {
          quantity: itemQuantity,
        })
        .then((res) => {
          handleGetCart();
          console.log(res);
        });
      dispatch(HANDLE_LOADING(false));
    } catch (err) {
      dispatch(HANDLE_LOADING(false));

      console.log(err);
    }
  };

  return {
    isLoading,
    cart,
    handleAddToCart,
    handleDeleteProductFromCart,
    handleDeleteAllProductFromCart,
    handleUpdateQuantity,
    handleGetCart,
    totalAmount,
  };
};

export default useCart;
