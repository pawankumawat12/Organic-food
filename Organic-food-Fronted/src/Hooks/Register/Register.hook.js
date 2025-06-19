import { useState } from "react";

function Registerhook() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const validateForm = (formData) => {
    if (
      !formData.fullname ||
      !formData.emailaddress ||
      !formData.password ||
      !formData.confirmpassword
    ) {
      return "All fields are required.";
    }
    if (formData.fullname.length < 3) {
      return "Full name must be at least 3 characters long.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailaddress)) {
      return "Please enter a valid email address.";
    }
    if (formData.password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (formData.password !== formData.confirmpassword) {
      return "Passwords do not match.";
    }
    return null;
  };

  const registerData = async (formData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    const validationError = validateForm(formData);
    if (validationError) {
      setLoading(false);
      setError(validationError);
      return null;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (
        data?.responseCode !== 201 ||
        (data?.error && data.error.length > 0)
      ) {
        const errorMessage =
          data?.error?.[0] || data?.data?.message || "Registration failed.";
        setError(errorMessage);
        return null;
      } else {
        setSuccess(data?.data?.message || "Signup successful!");
        return data;
      }
    } catch (err) {
      setError("Registration failed. Please try again.");
      return null;
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const clearError = () => setError(null);

  return { registerData, loading, error, success, clearError };
}

export default Registerhook;
