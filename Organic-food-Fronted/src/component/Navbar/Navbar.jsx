import "./Navbar.scss";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { Link } from "react-router-dom";
function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const toggleRegister = () => {
    setShowRegister((prev) => !prev);
  };
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  const toggleLogin = () => {
    setShowLogin((prev) => !prev);
  };

  const handleLogout = () =>{
    localStorage.removeItem("token");
    alert("Logout Successfully");
    setIsLoggedIn(false);
    
  }
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
          <a to="#">HOME</a>
          <div className="dropdown">
            <a to="#">
              PAGES <i className="fas fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a to="#">ABOUT US</a>
              </li>
              <li>
                <a to="#">SHOP</a>
              </li>
              <li>
                <a to="#">SINGLE PRODUCT</a>
              </li>
              <li>
                <a to="#">CART</a>
              </li>
              <li>
                <a to="#">CHECKOUT</a>
              </li>
              <li>
                <a to="#">BLOG</a>
              </li>
              <li>
                <a to="#">SINGLE POST</a>
              </li>
              <li>
                <a to="#">STYLES</a>
              </li>
              <li>
                <a to="#">CONTACT</a>
              </li>
              <li>
                <a to="#">THANK YOU</a>
              </li>
              <li>
                <a to="#">MY ACCOUNT</a>
              </li>
              <li>
                <a to="#">404 ERROR</a>
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
              {!isLoggedIn && (
                <>
                  <li>
                    <Link onClick={toggleLogin}>Login</Link>
                  </li>
                  <li>
                    <Link onClick={toggleRegister}>Signup</Link>
                  </li>
                </>
              )}
              {isLoggedIn && (
                <li>
                  <Link to="/" onClick={handleLogout}>Logout</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      {showSidebar && <Sidebar closeSidebar={() => setShowSidebar(false)} />}
      {showRegister && (
        <Register
          closeRegister={() => setShowRegister(false)}
          openLogin={() => setShowLogin(true)}
        />
      )}
      {showLogin && (
        <Login
          closeLogin={() => setShowLogin(false)}
          openRegister={() => setShowRegister(true)}
        />
      )}
    </>
  );
}
export default Navbar;
