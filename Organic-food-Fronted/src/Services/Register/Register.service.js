// RegisterService.js
import axiosInstance from "../../axiosInstance";

export function RegisterService(userData) {
  const url = "/auth/Signup";
  return axiosInstance
    .post(url, userData)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error during registration:", error?.response?.data || error.message);
      throw error;
    });
}
