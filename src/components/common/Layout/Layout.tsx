import React from "react";
import CustomNav from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <CustomNav />
      <Outlet />
    </>
  );
};

export default Layout;
