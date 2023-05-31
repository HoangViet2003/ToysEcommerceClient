import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../utils/axios";
import { POST_API } from "../utils/api";
import { SET_USER, HANDLE_LOADING } from "../store/authSlice";
import useAlert from "./useAlert";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );
  const { enqueueSnackbar } = useAlert();

  const handleLogin = async (data) => {
    dispatch(HANDLE_LOADING(true));

    try {
      const res = await axiosInstance.post(POST_API().login, data);
      console.log(res.data.message);
      if (res.data.message === "Authentication successful") {
        console.log(res.data.user);

        dispatch(SET_USER(res.data.user));
        if (res.data.user) {
          localStorage.setItem("accessToken", res.data.user.accessToken);
          localStorage.setItem("username", res.data.user.username);
          localStorage.setItem("email", res.data.user.email);
          localStorage.setItem("user_id", res.data.user._id);
          localStorage.setItem("is_admin", res.data.user.isAdmin);
        }

        if (res.data.user.isAdmin === true) {
          enqueueSnackbar("Login Succesfully", { variant: "success" });
          window.location.href = "/admin";
        } else {
          enqueueSnackbar("Login Succesfully", {
            variant: "success",
          });

          window.location.href = "/";
        }
      } else {
        enqueueSnackbar("Login Fail", { variant: "error" });
        console.log(res.data.message);
      }
      dispatch(HANDLE_LOADING(false));
    } catch (error) {
      dispatch(HANDLE_LOADING(false));
      enqueueSnackbar("Login Fail", { variant: "error" });
      console.log(error);
    }
  };

  const handleRegister = async (data) => {
    try {
      const res = await axiosInstance.post(POST_API().register, data);
      console.log(res.data);
      if (res.data.user) {
        dispatch(SET_USER(res.data.user));

        localStorage.setItem("accessToken", res.data.user.accessToken);
        localStorage.setItem("username", res.data.user.username);
        localStorage.setItem("email", res.data.user.email);
        localStorage.setItem("user_id", res.data.user._id);
        localStorage.setItem("is_admin", res.data.user.isAdmin);
      }
      if (res.data.user.isAdmin === true) {
        window.location.href = "/admin";
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleLogin,
    handleRegister,
    isLoading,
    isAuthenticated,
    user,
  };
};

export default useAuth;
