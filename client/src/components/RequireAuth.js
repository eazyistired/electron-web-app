import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/auth";

const RequireAuth = ({ children }) => {
  const [logged] = useAuth();
  const location = useLocation();

  return logged ? (
    { children }
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
