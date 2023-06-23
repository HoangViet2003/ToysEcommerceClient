import axios from "axios";
import React, { useEffect } from "react";

// const ENDPOINT = 'http://localhost:8000/api'
const ENDPOINT = "https://drippyecommerce.onrender.com/api";
const accessToken = localStorage.getItem("accessToken");





const axiosInstance = axios.create({
  baseURL: ENDPOINT,
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer ${accessToken}`
  },
});

export default axiosInstance;
