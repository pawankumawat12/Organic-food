// import "./Register.scss";
// import registerimg from "../../assets/login.png";
// import {Link} from 'react-router-dom'
// function Register({ closeRegister }) {
//   return (
//     <>
//       <div className="login-popup">
//         <div className="login-container" onClick={(e) => e.stopPropagation()}>
//           <div className="login-form">
//             <h1 className="title">Create an account</h1>
//             <p className="subtitle">Please enter your details to register</p>

//             <form>
//               <label>Full Name</label>
//               <input type="text" placeholder="Enter your full name" required />

//               <label>Email address</label>
//               <input type="email" placeholder="Enter your email" required />

//               <label>Password</label>
//               <input type="password" placeholder="Create a password" required />

//               <label>Confirm Password</label>
//               <input
//                 type="password"
//                 placeholder="Confirm your password"
//                 required
//               />

//               <button type="submit" className="sign-in-btn">
//                 Sign up
//               </button>

//               <button type="button" className="google-btn">
//                 Sign up with Google
//               </button>
//             </form>

//             <p className="signup-text">
//               Already have an account? <Link to="/login">Sign in</Link>
//             </p>
//           </div>

//           <div className="login-illustration">
//             <button className="close-btn" onClick={closeRegister}>
//               <i className="fas fa-times"></i>
//             </button>
//             <img src={registerimg} alt="Register Illustration" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Register;

import React, { useState } from "react";
import "./Register.scss";
import registerimg from "../../assets/login.png";
import { Link } from "react-router-dom";
import { RegisterService } from "../../Services/Register/Register.service" // Adjust path if needed


function Register({ closeRegister }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const userData = {
      fullname: formData.fullName,
      emailaddress: formData.email,
      password: formData.password,
      confirmpassword: formData.confirmPassword,
    };

    try {
      setLoading(true);
      const response = await RegisterService(userData);
      console.log("Registration successful:", response);
      closeRegister();
    } catch (err) {
      setError(err.response?.data?.error?.[0] || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    // Redirect to your backend Google OAuth URL
    window.open("https://organic-food-dt19.onrender.com/api/auth/google", "_self");
  };

  return (
    <div className="login-popup">
      <div className="login-container" onClick={(e) => e.stopPropagation()}>
        <div className="login-form">
          <h1 className="title">Create an account</h1>
          <p className="subtitle">Please enter your details to register</p>

          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label>Email address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            {error && <p className="error">{error}</p>}

            <button type="submit" className="sign-in-btn" disabled={loading}>
              {loading ? "Signing up..." : "Sign up"}
            </button>

            <button type="button" className="google-btn" onClick={handleGoogleSignUp}>
              Sign up with Google
            </button>
          </form>

          <p className="signup-text">
            Already have an account? <Link to="/login">Sign in</Link>
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