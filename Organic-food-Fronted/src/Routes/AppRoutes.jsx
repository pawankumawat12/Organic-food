import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import AddtoCart from "../pages/AddtoCart/Addtocart";

import AdminLayout from "./AdminLayout";
import UserLayout from "./UserLayout";
import AdminProduct from "../Admin/pages/AdminProducts/AdminProduct";
import AdminDashboard from "../Admin/pages/AdminDashboard/AdminDashboard";

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
      </Route>
    </Routes>
  );
};

export default AppRoutes;
