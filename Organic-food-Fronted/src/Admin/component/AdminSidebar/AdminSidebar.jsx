import { Link } from "react-router-dom";
import "./AdminSidebar.scss";
function AdminSidebar() {
  return (
    <>
      <div className="admin-sidebar">
        <h2>Organic-users</h2>
        <ul>
          <li>
            <Link className="links active" to="/admin/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="links active" to="#">
              Orders
            </Link>
          </li>
          <li>
            <Link className="links active" to="/admin/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="links active" to="#">
              Customers
            </Link>
          </li>
          <li>
            <Link className="links active" to="#">
              Reports
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default AdminSidebar;
