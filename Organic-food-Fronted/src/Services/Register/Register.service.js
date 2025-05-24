import axiosInstance from "../../axiosInstance";
export function RegisterService(userData) {
  const url = "/auth/Signup";
  const registerResponse = axiosInstance
    .post(url, userData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error during registration:", error);
      throw error;
    });
  return registerResponse;
}

export default RegisterService;
