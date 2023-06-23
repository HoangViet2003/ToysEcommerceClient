import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../utils/axios";
import { POST_API, GET_API, DELETE_API, UPDATE_API } from "../utils/api";
import { HANDLE_SET_ORDER, HANDLE_LOADING } from "../store/orderSlice";
import { enqueueSnackbar } from "notistack";
import useCart from "./useCart";
import DataTable from "react-data-table-component";

export const useOrder = () => {
  const dispatch = useDispatch();
  const { isLoading, order } = useSelector((state) => state.order);
  const {handleDeleteAllProductFromCart,handleGetCart} = useCart();


  const handleGetOrder = async () => {
    dispatch(HANDLE_LOADING(true));
    try{
        const res = await axiosInstance.get(GET_API({}).getAllOrder);
        if(res.data){
          console.log(res.data)
            dispatch(HANDLE_SET_ORDER(res.data));
        }
        dispatch(HANDLE_LOADING(false));
    }catch(err){
        console.log(err)
    }
  }

  const handleGetOrderById = async () => {
    dispatch(HANDLE_LOADING(true));
    try{
        const res = await axiosInstance.get(GET_API({}).getOrderById);

        if(res.data){
          console.log(res.data)
            dispatch(HANDLE_SET_ORDER(res.data));
        }
        dispatch(HANDLE_LOADING(false));
    }catch(err){
        console.log(err)
    }
  }

  const handleCreateOrder = async (totalAmount) => {
    dispatch(HANDLE_LOADING(true));
    try{
        const res = await axiosInstance.post(POST_API().createOrder, {total:totalAmount});
        if(res.data){
          handleDeleteAllProductFromCart()
        await  handleGetCart()
            enqueueSnackbar("Order successfully", {
                variant: "success",
              });
            
        }
        dispatch(HANDLE_LOADING(false));
    }catch(err){
        console.log(err)
    }
  };

  const handleConfirmOrder = async (product_id) => {
    dispatch(HANDLE_LOADING(true));
    try{
        const res = await axiosInstance.put(UPDATE_API(product_id).confirmOrder);
        if(res.data){
          console.log(res)
          handleGetOrder()
            enqueueSnackbar("Confirm Order successfully", {
                variant: "success",
              });
        }
        dispatch(HANDLE_LOADING(false));
    }catch(err){
        console.log(err)
    }
  }

  //get order by time
const handleGetOrderByTime = async (convertDate) => {
  try{
    const res = await axiosInstance.get(GET_API({date:convertDate}).getOrderByTime);
    if(res.data){
      console.log(res.data)
        dispatch(HANDLE_SET_ORDER(res.data));
    }
    dispatch(HANDLE_LOADING(false));
  }catch(err){
    console.log(err)
  }
}

const handleSearchOrder = async (keyword) => {
  try{
    console.log("key",keyword)
    const res = await axiosInstance.get(GET_API({}).searchOrder,keyword);
    if(res.data){
      console.log(res.data)
        dispatch(HANDLE_SET_ORDER(res.data));
    }
    dispatch(HANDLE_LOADING(false));
  }catch(err){
    console.log(err)
  }
}

  return {
    isLoading,
    order,
    handleGetOrder,
    handleCreateOrder,
    handleConfirmOrder,
    handleGetOrderById,
    handleGetOrderByTime,
    handleSearchOrder
  };
};

export default useOrder;
