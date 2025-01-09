import React from "react";
import { useLocation, Navigate } from "react-router-dom";

import { useAuth } from "@/contexts";

const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
