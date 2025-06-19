import "./Login.scss";
import loginimg from "../../assets/login.png";
import { Link } from "react-router-dom";
import Loginhook from "../../Hooks/Login/Login.hook";

function Login({ closeLogin, openRegister }) {
  const { formData, handleChange, handleSubmit, loading, error } = Loginhook();

  const handleSignUpClick = () => {
    if (closeLogin) closeLogin();
    if (openRegister) openRegister();
  };

  return (
    <div className="login-popup" onClick={closeLogin}>
      <div className="login-container" onClick={(e) => e.stopPropagation()}>
        <div className="login-form">
          <h1 className="title">Welcome back</h1>
          <p className="subtitle">Please enter your details</p>

          {error && <p className="errors">{error}</p>}

          <form onSubmit={handleSubmit}>
            <label>Email address</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="emailaddress"
              value={formData.emailaddress}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <div className="options">
              <label>
                <input type="checkbox" /> Remember for 30 days
              </label>
              <Link to="#">Forgot password?</Link>
            </div>

            <button type="submit" className="sign-in-btn">
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <button type="button" className="google-btn">
              Sign in with Google
            </button>
          </form>

          <p className="signup-text">
            Don’t have an account?{" "}
            <span
              style={{ color: "#007bff", cursor: "pointer" }}
              onClick={handleSignUpClick}
            >
              Sign up
            </span>
          </p>
        </div>

        <div className="login-illustration">
          <Link to={"/"}>
          <button className="close-btn" onClick={closeLogin}>
            <i className="fas fa-times"></i>
          </button>
          </Link>
          <img src={loginimg} alt="Login Illustration" />
        </div>
      </div>
    </div>
  );
}

export default Login;
