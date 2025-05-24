import { useState } from "react";
import RegisterService from "../Services/Register/Register.service";
import { useNavigate } from "react-router-dom";
export function registerUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await RegisterService(formData);
      setSuccess("Registration successful!");
      setLoading(false);
      navigate("/login");
      return result;
    } catch (error) {
      setError("An error occurred while registering. Please try again.");
    }
  };
  return {
    formData,
    error,
    loading,
    success,
    handleChange,
    handleSubmit,
  };
}
