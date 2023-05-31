import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../utils/axios";
import { POST_API, GET_API } from "../utils/api";
import {
  HANDLE_SET_PRODUCT,
  HANDLE_LOADING,
  HANDLE_SET_TOTAL_PAGE,
  HANDLE_SET_SEARCH,
  HANDLE_SET_PRODUCT_DETAIL,
} from "../store/productSlice";

export const useProduct = () => {
  const dispatch = useDispatch();
  const { isLoading, product, totalPage, search, productDetail } = useSelector(
    (state) => state.product
  );

  const handleGetProduct = async (page) => {
    dispatch(HANDLE_LOADING(true));

    try {
      const res = await axiosInstance.get(GET_API(page).getAllProducts);
      if (res.data) {
        dispatch(HANDLE_SET_TOTAL_PAGE(res.data.totalPages));
        dispatch(HANDLE_SET_PRODUCT(res.data.products));
      }
      dispatch(HANDLE_LOADING(false));
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetProductWithoutLimit = async () => {
    dispatch(HANDLE_LOADING(true));

    try {
      const res = await axiosInstance.get(
        GET_API({ page: null }).getAllProductsWithoutLimit
      );
      if (res.data) {
        dispatch(HANDLE_SET_PRODUCT(res.data.products));
      }
      dispatch(HANDLE_LOADING(false));
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetProductById = async (id) => {
    dispatch(HANDLE_LOADING(true));

    try {
      const res = await axiosInstance.get(GET_API({ id: id }).getProductById);
      dispatch(HANDLE_SET_PRODUCT_DETAIL(res.data));
      dispatch(HANDLE_LOADING(false));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearchProduct = async (name) => {
    dispatch(HANDLE_LOADING(true));

    try {
      if (name === "") {
        return handleGetProduct(1);
      }
      const res = await axiosInstance.get(
        GET_API({ name: name }).searchProduct
      );
      if (res.data) {
        dispatch(HANDLE_SET_PRODUCT(res.data));
      }
      dispatch(HANDLE_LOADING(false));
    } catch (err) {
      console.log(err);
    }
  };

  return {
    isLoading,
    product,
    handleGetProduct,
    handleSearchProduct,
    handleGetProductById,
    totalPage,
    search,
    productDetail,
    handleGetProductWithoutLimit,
  };
};

export default useProduct;
