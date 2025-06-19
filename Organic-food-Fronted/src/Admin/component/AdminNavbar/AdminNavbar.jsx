import "./AdminNavbar.scss";
import userimg from "../../../../public/userimg.png";
import logoimg from "../../../assets/logo.png";

function AdminNavbar() {
  return (
    <div className="admin-navbar">
      <div className="admin-navbar-left">
        <div className="logo-container">
          <img src={logoimg} alt="Organic Logo" className="logo" />
          <span className="logo-text">ORGANIC</span>
        </div>
      </div>

      <div className="admin-navbar-center  mx-5">
        <div className="search-container">
          <input type="search" placeholder="Search..." />
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>

        <div className="admin-navbar-right">
          <img src={userimg} alt="User" className="user-img" />
          <button className="logout-btn">LOGOUT</button>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
