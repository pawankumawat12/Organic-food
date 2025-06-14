import { useState } from "react";
import { useNavigate } from "react-router-dom";
import registerUserService from "./../Services/Register/Register.service";
function useRegisterUser() {
  const [formData, setFormData] = useState({
    fullname: "",
    emailaddress: "",
    password: "",
    confirmpassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

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
      await registerUserService(formData);
      setSuccess("Registration successful!");
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, handleSubmit, loading, error, success };
}
export default useRegisterUser;
