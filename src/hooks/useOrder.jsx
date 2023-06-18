import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../utils/axios";
import { POST_API, GET_API, DELETE_API, UPDATE_API } from "../utils/api";
import { HANDLE_SET_ORDER, HANDLE_LOADING } from "../store/orderSlice";
import { enqueueSnackbar } from "notistack";

export const useOrder = () => {
  const dispatch = useDispatch();
  const { isLoading, order } = useSelector((state) => state.order);


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

  const handleCreateOrder = async (data) => {
    dispatch(HANDLE_LOADING(true));
    try{
        const res = await axiosInstance.post(POST_API().createOrder, data);
        if(res.data){
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

  return {
    isLoading,
    order,
    handleGetOrder,
    handleCreateOrder,
    handleConfirmOrder,
    handleGetOrderById
  };
};

export default useOrder;
