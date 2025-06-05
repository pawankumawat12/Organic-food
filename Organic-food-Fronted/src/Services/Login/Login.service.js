import axiosInstance from "../../axiosInstance";
async function loginUserService(userData) {
    const payload = {
        emailaddress: userData.emailaddress, 
        password: userData.password,
    }
    console.log("Logging in user with data:", payload);
    try{
        const response = await axiosInstance.post('/auth/signin', payload);
        return response.data;

    }
    catch(error){
        console.error("Login error:", error.response?.data || error.message);
        throw error;
    }

}
export default loginUserService;