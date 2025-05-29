import { Outlet } from "react-router";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkLoggedInStatus } from "../../store/auth/Auth.actions";
import { fetchUserDetails } from "../../store/user/User.actions";

function AppLayOut() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkLoggedInStatus());
    if (isAuthenticated) {
      dispatch(fetchUserDetails());
    }
  }, [dispatch, isAuthenticated]);
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}

export default AppLayOut;
