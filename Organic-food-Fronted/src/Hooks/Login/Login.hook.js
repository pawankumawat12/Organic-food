import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Loginhook() {
  const [formData, setFormData] = useState({
    emailaddress: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError(null); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!formData.emailaddress || !formData.password) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailaddress)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data?.responseCode !== 200 || (data?.error && data.error.length > 0)) {
        const errorMessage =
          data?.error?.[0] || data?.message || "Login failed. Please try again.";
        setError(errorMessage);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      alert("Login Successfully");
      
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return { formData, handleChange, handleSubmit, loading, error };
}

export default Loginhook;
