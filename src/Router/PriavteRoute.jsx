import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const PriavteRoute = ({ children }) => {
  const location = useLocation();

  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/signin-out" state={{ from: location }} replace />;
  }
  return children;
};

export default PriavteRoute;
