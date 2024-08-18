import React from "react";
import { Outlet } from "react-router";
import Hero from "../../Components/Hero";
import Footer from "../../Components/Footer";

const Layout = () => {
  return (
    <div className=" mx-auto mb-10">
      <Hero />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
