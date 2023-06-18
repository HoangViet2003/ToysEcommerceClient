import axios from "axios";

// const ENDPOINT = 'http://localhost:8000/api'
const ENDPOINT = "https://drippyecommerce.onrender.com/api";

const axiosInstance = axios.create({
  baseURL: ENDPOINT,
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
  },
});

export default axiosInstance;