import loginUserService from "../Services/Login/Login.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useLoginUser(onSuccess) {
  const [formData, setFormData] = useState({
    emailaddress: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await loginUserService(formData);
      setSuccess("Login successful!");
      console.log("Login response:", response);
      if (onSuccess) onSuccess(); // <-- yahan callback call karein
    } catch (err) {
      setError("Login failed. Please try again.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };
    return { formData, handleChange, handleSubmit, loading, error, success };

}
export default useLoginUser;
