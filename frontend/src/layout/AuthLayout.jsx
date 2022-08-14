import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthLayout = () => {
  const { user } = useSelector((state) => state.user);

  if (user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default AuthLayout;
