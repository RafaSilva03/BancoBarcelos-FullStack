import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/AuthContext";

interface PrivateRouteProps {
  element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? element : <Navigate to="/auth/signin" />;
};

export default PrivateRoute;