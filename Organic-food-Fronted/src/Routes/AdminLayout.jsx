import { Outlet } from "react-router-dom";
import AdminNavbar from "../Admin/component/AdminNavbar/AdminNavbar";
import AdminSidebar from "../Admin/component/AdminSidebar/AdminSidebar";
import "./AdminLayout.scss";
const AdminLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />
      <div style={{ flex: 1 }}>
        <AdminNavbar />
        <div className="admin-content">

        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
