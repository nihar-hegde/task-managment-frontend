import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { token } = useContext(AuthContext);

  return token ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
