import { Outlet } from "react-router";
import Header from "../Header/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkLoggedInStatus } from "../../store/auth/Auth.actions";

function AppLayOut() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLoggedInStatus());
  }, [dispatch]);
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}

export default AppLayOut;
