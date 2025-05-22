import "./Navbar.scss";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { Link } from "react-router-dom";
function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const toggleRegister = () => {
    setShowRegister((prev) => !prev);
  };
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  const toggleLogin = () => {
    setShowLogin((prev) => !prev);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <div className="logo-container">
            <img
              src="./src/assets/logo.png"
              alt="Organic Logo"
              className="logo"
            />
            <span className="logo-text">ORGANIC</span>
          </div>
          <button className="hamburger" onClick={toggleSidebar}>
            &#9776;
          </button>
          <div className="search-container">
            <select>
              <option>Drinks</option>
              <option>Snacks</option>
              <option>Fruits</option>
            </select>
            <input type="text" placeholder="Search Organic" />
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div className="navbar-center">
          <a href="#">HOME</a>
          <div className="dropdown">
            <a href="#">
              PAGES <i className="fas fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#">SHOP</a>
              </li>
              <li>
                <a href="#">SINGLE PRODUCT</a>
              </li>
              <li>
                <a href="#">CART</a>
              </li>
              <li>
                <a href="#">CHECKOUT</a>
              </li>
              <li>
                <a href="#">BLOG</a>
              </li>
              <li>
                <a href="#">SINGLE POST</a>
              </li>
              <li>
                <a href="#">STYLES</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
              <li>
                <a href="#">THANK YOU</a>
              </li>
              <li>
                <a href="#">MY ACCOUNT</a>
              </li>
              <li>
                <a href="#">404 ERROR</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-right">
          <Link to="/" className="cart-icon">
            <i className="fas fa-bookmark"></i>
          </Link>
          <Link to="/cart" className="cart-icon">
            <i className="fas fa-cart-shopping"></i>
          </Link>

          <div className="dropdown">
            <Link to="/" className="cart-icon">
              <i className="fas fa-user"></i>
            </Link>
            <ul className="dropdown-menu">
              <li>
                <a href="#" onClick={toggleLogin}>
                  Login
                </a>
              </li>
              <li>
                <a href="#" onClick={toggleRegister}>
                  Signup
                </a>
              </li>
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showSidebar && <Sidebar closeSidebar={() => setShowSidebar(false)} />}
      {showLogin && (
        <Login
          closeLogin={() => {
            setShowLogin(false);
          }}
        />
      )}
      {showRegister && (
        <Register
          closeRegister={() => {
            setShowRegister(false);
          }}
        />
      )}
    </>
  );
}
export default Navbar;
