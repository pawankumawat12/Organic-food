import "./Register.scss";
import registerimg from "../../assets/login.png";
import { Link, Navigate } from "react-router-dom";
import Registerhook from "../../Hooks/Register/Register.hook";
import { useState } from "react";

function Register({ closeRegister, openLogin }) {
  const [formData, setFormData] = useState({
    fullname: "",
    emailaddress: "",
    password: "",
    confirmpassword: "",
  });

  const {
    registerData,
    loading,
    error,
    success,
    clearError,
  } = Registerhook();

  const handleSignInClick = () => {
    if (closeRegister) closeRegister();
    if (openLogin) openLogin();
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    clearError(); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await registerData(formData);
    if (data) {
      setFormData({
        fullname: "",
        emailaddress: "",
        password: "",
        confirmpassword: "",
      });
      alert("Registration successful! Please log in.");
      openLogin(); 
    }
  };

  return (
    <div className="login-popup">
      <div className="login-container" onClick={(e) => e.stopPropagation()}>
        <div className="login-form">
          <h1 className="title">Create an account</h1>
          <p className="subtitle">Please enter your details to register</p>

          {error && <p className="errors">{error}</p>}
          {success && <p className="success">{success}</p>}

          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
            />

            <label>Email address</label>
            <input
              type="text"
              placeholder="Enter your email"
              name="emailaddress"
              value={formData.emailaddress}
              onChange={handleChange}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
            />

            <button type="submit" className="sign-in-btn">
              {loading ? "Signing up..." : "Sign up"}
            </button>

            <button type="button" className="google-btn">
              Sign up with Google
            </button>
          </form>

          <p className="signup-text">
            Already have an account?{" "}
            <Link onClick={handleSignInClick}>Sign in</Link>
          </p>
        </div>

        <div className="login-illustration">
          <button className="close-btn" onClick={closeRegister}>
            <i className="fas fa-times"></i>
          </button>

          <img src={registerimg} alt="Register Illustration" />
        </div>
      </div>
    </div>
  );
}

export default Register;
