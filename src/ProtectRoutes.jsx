import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectRoutes() {
  const authenticated = useSelector((store) => store.user.authenticated);
  return authenticated ? <Outlet /> : <Navigate to="/auth" />;
}

export default ProtectRoutes;
