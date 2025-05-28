import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { Outlet } from "react-router";

function RequireAuth() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? <Outlet /> : <Navigate to={"/auth"} />;
}

export default RequireAuth;
