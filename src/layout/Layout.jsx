import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex">
      <div className="lg:w-[280px]">
        <Navbar />
      </div>
      <div className="overflow-hidden lg:w-[calc(100%-280px)] w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
