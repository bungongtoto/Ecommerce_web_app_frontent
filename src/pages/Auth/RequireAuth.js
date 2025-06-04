import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { Outlet } from "react-router";
import { checkLoggedInStatus } from "../../store/auth/Auth.actions";
import { PulseLoader } from "react-spinners";

function RequireAuth() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(checkLoggedInStatus());
  }, [dispatch]);

  if (isLoading) {
    // You can return a spinner or nothing while auth status is loading
    return (
      <main>
        {" "}
        <PulseLoader className="loader" color="#F34325" />
      </main>
    );
  }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={"/auth"} state={{ from: location }} replace />
  );
}

export default RequireAuth;
