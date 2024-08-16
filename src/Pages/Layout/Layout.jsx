import React from "react";
import { Outlet } from "react-router";
import Hero from "../../Components/Hero";

const Layout = () => {
  return (
    <div className=" mx-auto mb-10">
      <Hero />
      <Outlet />
    </div>
  );
};

export default Layout;
