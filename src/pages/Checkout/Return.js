import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router";
import { checkoutCart, fetchUserCart } from "../../store/cart/cart.actions";
import { enqueueSnackbar } from "notistack";
import { PulseLoader } from "react-spinners";

function Return() {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const session_id = urlParams.get("session_id");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, isCheckingOut, checkoutError } = useSelector(
    (state) => state.cart.checkout
  );

  useEffect(() => {
    dispatch(checkoutCart({ session_id }));
  }, [session_id, dispatch]);

  useEffect(() => {
    if (checkoutError && !isCheckingOut) {
      if (checkoutError === "No items found in your card") {
        navigate("/");
        enqueueSnackbar(`Info: ${checkoutError}`, { variant: "info" });
      }
    }
  }, [checkoutError, isCheckingOut, navigate]);

  useEffect(() => {
    if (status === "Open" && !isCheckingOut) {
      enqueueSnackbar("Order did not go Through.", { variant: "error" });
      navigate("/cart/checkout", { state: { from: location } });
    }

    if (status === "Complete") {
      dispatch(fetchUserCart());
    }
  }, [status, isCheckingOut, location, navigate, dispatch]);

  return (
    <main id="return">
      <h1> "Completing Your Order."</h1>
      {isCheckingOut ? (
        <PulseLoader className="loader" color="#F34325" />
      ) : (
        <>
          <p>
            Thanks very much for your command. You will be delivered shortly.
          </p>
          <NavLink to={"/"}>Home</NavLink>
          <br></br>
          <NavLink to={"/orders"}>Order History</NavLink>
        </>
      )}
    </main>
  );
}

export default Return;
