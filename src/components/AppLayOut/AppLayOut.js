import { Outlet } from "react-router";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkLoggedInStatus } from "../../store/auth/Auth.actions";
import { fetchUserDetails } from "../../store/user/User.actions";
import { fetchProductCategories } from "../../store/categories/categories.actions";
import { enqueueSnackbar } from "notistack";

function AppLayOut() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { categoriesError } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchProductCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categoriesError) {
      enqueueSnackbar("Error fetching categories", { variant: "error" });
    }
  }, [categoriesError]);

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
