import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { Outlet } from "react-router";
import { checkLoggedInStatus } from "../../store/auth/Auth.actions";

function RequireAuth() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(checkLoggedInStatus());
  }, [isAuthenticated, dispatch]);

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={"/auth"} state={{ from: location }} />
  );
}

export default RequireAuth;
