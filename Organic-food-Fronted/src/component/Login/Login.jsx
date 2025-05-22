import "./Login.scss";
import loginimg from "../../assets/login.png";

function Login({ closeLogin }) {
  return (
    <div className="login-popup" onClick={closeLogin}>
      <div className="login-container" onClick={(e) => e.stopPropagation()}>
        <div className="login-form">
          <h1 className="title">Welcome back</h1>
          <p className="subtitle">Please enter your details</p>

          <form>
            <label>Email address</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />

            <div className="options">
              <label>
                <input type="checkbox" /> Remember for 30 days
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className="sign-in-btn">
              Sign in
            </button>

            <button type="button" className="google-btn">
              Sign in with Google
            </button>
          </form>

          <p className="signup-text">
            Don’t have an account? <a href="#">Sign up</a>
          </p>
        </div>

        <div className="login-illustration">
          <button className="close-btn" onClick={closeLogin}>
            <i className="fas fa-times"></i>
          </button>
          <img src={loginimg} alt="Login Illustration" />
        </div>
      </div>
    </div>
  );
}

export default Login;
