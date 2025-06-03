import axios from "axios";
import { API_URL, PROD_URL } from "./enviournment.js";

const axiosInstance = axios.create({
  baseURL: PROD_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export default axiosInstance;
