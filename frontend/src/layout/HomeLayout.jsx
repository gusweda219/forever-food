import React from "react";
import { Outlet } from "react-router-dom";
import Search from "../components/Search";

const HomeLayout = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-5">
      <Search />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
