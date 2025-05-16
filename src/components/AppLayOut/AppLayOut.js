import { Outlet } from "react-router";
import Header from "../Header/Header";

function AppLayOut() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}

export default AppLayOut;
