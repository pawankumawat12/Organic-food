import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import AddtoCart from "../pages/AddtoCart/Addtocart";

import AdminLayout from "./AdminLayout";
import UserLayout from "./UserLayout";
import AdminProduct from "../Admin/pages/AdminProducts/AdminProduct";
import AdminDashboard from "../Admin/pages/AdminDashboard/AdminDashboard";
import Customers from "../Admin/pages/AdminCustomers/Customers";
import Order from "../Admin/pages/Orders/Order";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<AddtoCart />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/products" element={<AdminProduct />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/order" element={<Order />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
