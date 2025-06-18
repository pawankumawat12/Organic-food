

import "./Register.scss";
import registerimg from "../../assets/login.png";
import { Link } from "react-router-dom";
import userRegistration from "../../hooks/userRegistration";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import React, {useState} from 'react';
function Register({ closeRegister, openLogin }) {
  const { formData, handleChange, handleSubmit, loading, error, success } =
    userRegistration();

  const handleSignInClick = () => {
    if (closeRegister) closeRegister(); 
    if (openLogin) openLogin();         
  };

  return (
    <>
      <div className="login-popup">
        <div className="login-container" onClick={(e) => e.stopPropagation()}>
          <div className="login-form">
            <h1 className="title">Create an account</h1>
            <p className="subtitle">Please enter your details to register</p>

            <form>
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" required />

              <label>Email address</label>
              <input type="email" placeholder="Enter your email" required />

              <label>Password</label>
              <input type="password" placeholder="Create a password" required />

              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                required
              />

            {error && <p className="error">{error}</p>}

            <button type="submit" className="sign-in-btn" disabled={loading}>
              {loading ? "Signing up..." : "Sign up"}
            </button>

            <button type="button" className="google-btn">
              Sign up with Google
            </button>
          </form>

            <p className="signup-text">
              Already have an account? <Link onClick={handleSignInClick}>Sign in</Link>
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
    </>
  );
}

export default Register;