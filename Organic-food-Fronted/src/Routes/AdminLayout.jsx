import { Outlet } from "react-router-dom";
import AdminNavbar from "../Admin/component/AdminNavbar/AdminNavbar";
import AdminSidebar from "../Admin/component/AdminSidebar/AdminSidebar";
import "./AdminLayout.scss";
const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <div className="admin-sidebar">
        <AdminSidebar />
      </div>
      <div className="admin-main">
        <div className="admin-navbar">
          <AdminNavbar />
        </div>
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
