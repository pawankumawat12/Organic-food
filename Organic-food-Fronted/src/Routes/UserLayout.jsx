import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> 
      <Footer />
    </>
  );
};

export default UserLayout;
