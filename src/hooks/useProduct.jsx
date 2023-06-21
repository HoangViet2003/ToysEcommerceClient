import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../utils/axios";
import { POST_API, GET_API, DELETE_API, UPDATE_API } from "../utils/api";
import {
  HANDLE_SET_PRODUCT,
  HANDLE_LOADING,
  HANDLE_SET_TOTAL_PAGE,
  HANDLE_SET_SEARCH,
  HANDLE_SET_PRODUCT_DETAIL,
} from "../store/productSlice";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

export const useProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, product, totalPage, search, productDetail } = useSelector(
    (state) => state.product
  );

  const handleGetProduct = async (currentPage) => {
    dispatch(HANDLE_LOADING(true));

    try {
      const res = await axiosInstance.get(
        GET_API({ page: currentPage }).getAllProducts
      );
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
        GET_API({}).getAllProductsWithoutLimit
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

  const handleCreateProduct = async (data) => {
    dispatch(HANDLE_LOADING(true));

    try {
      const res = await axiosInstance.post(POST_API().createProduct, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res.data) {
        window.location.href = "/product-dashboard";

        enqueueSnackbar("Create product successfully", { variant: "success" });
        console.log(res.data);
      }
      dispatch(HANDLE_LOADING(false));
    } catch (err) {
      enqueueSnackbar("Create product failed", { variant: "error" });
      console.log(err);
    }
  };

  const handleUpdateProduct = async (product_id, formData) => {
    dispatch(HANDLE_LOADING(true));

    try {
      const res = await axiosInstance.put(
        UPDATE_API(product_id).updateProduct,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }
      );
      if (res.data) {
        navigate("/product-dashboard");
        enqueueSnackbar("Update product successfully", { variant: "success" });
        console.log(res.data);
      }
      dispatch(HANDLE_LOADING(false));
    } catch (err) {
      enqueueSnackbar("Update product failed", { variant: "error" });
      console.log(err);
    }
  };

  const handleDeleteProduct = async (id) => {
    dispatch(HANDLE_LOADING(true));

    try {
      const res = await axiosInstance.delete(DELETE_API(id).deleteProduct);
      if (res.data) {
        handleGetProductWithoutLimit();
        enqueueSnackbar("Delete product successfully", { variant: "success" });
        console.log(res.data);
      }
      dispatch(HANDLE_LOADING(false));
    } catch (err) {
      enqueueSnackbar("Delete product failed", { variant: "error" });
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
    handleCreateProduct,
    handleDeleteProduct,
    handleUpdateProduct,
  };
};

export default useProduct;
