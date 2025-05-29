import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { Outlet } from "react-router";

function RequireAuth() {
  const location = useLocation();
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={"/auth"} state={{ from: location }} replace />
  );
}

export default RequireAuth;
