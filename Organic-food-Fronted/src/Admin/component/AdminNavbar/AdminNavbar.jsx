import "./AdminNavbar.scss";
import userimg from "../../../../public/userimg.png";
import logoimg from "../../../assets/logo.png";
function AdminNavbar() {
  return (
    <>
      <div>
        <div className="admin-navbar">
          <div className="admin-navbar-left">
            <div className="logo-container">
              <img
                src={logoimg}
                alt="Organic Logo"
                className="logo"
              />
              <span className="logo-text">ORGANIC</span>
            </div>
          </div>
          <div className="admin-navbar-center">
            <div className="d-flex align-items-center">
              <input type="search" placeholder="Search..." />
              <button className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div>
              <img src={userimg} alt="User" className="user-img" />
            </div>
          </div>
          <div className="admin-navbar-right">
            <button className="logout-btn">LOGOUT</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminNavbar;
