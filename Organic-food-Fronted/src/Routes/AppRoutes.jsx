import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import AddtoCart from "../pages/AddtoCart/Addtocart";

import Blog from "../pages/Blog/Blog";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<AddtoCart />} />
    </Routes>
  );
};
export default AppRoutes;
