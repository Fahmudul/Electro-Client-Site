import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className=" mx-auto mb-10">
      <Outlet />
    </div>
  );
};

export default Layout;
