// RegisterService.js
import axiosInstance from "../../axiosInstance";

 async function registerUserService(userData) {
  const payload = {
    fullname: userData.fullname,
    emailaddress: userData.emailaddress,
    password: userData.password,
    confirmpassword: userData.confirmpassword,
  };

  console.log("Registering user with data:", payload);
  try {
    const response = await axiosInstance.post("/auth/Signup", payload);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    throw error;
  }
}

export default registerUserService;