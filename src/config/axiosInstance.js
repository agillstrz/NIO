import axios from "axios";
import AUTH from "../utils/Auth";
import { CONSTANT } from "../utils/CONSTANT.JS";
const axiosInstance = axios.create({
  baseURL: CONSTANT.baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${AUTH.getToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
