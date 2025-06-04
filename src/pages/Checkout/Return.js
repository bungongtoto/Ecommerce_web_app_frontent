import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router";
import { checkoutCart } from "../../store/cart/cart.actions";
import { enqueueSnackbar } from "notistack";
import { PulseLoader } from "react-spinners";

function Return() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, isCheckingOut, checkoutError } = useSelector(
    (state) => state.cart.checkout
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const session_id = urlParams.get("session_id");
    dispatch(checkoutCart({ session_id }));
  }, [location.search, dispatch]);

  useEffect(() => {
    if (checkoutError && !isCheckingOut) {
      enqueueSnackbar(`Info: ${checkoutError}`, { variant: "info" });
      if (checkoutError === "No items found in your card") {
        navigate("/");
      }
    }
  }, [checkoutError, isCheckingOut, navigate]);

  useEffect(() => {
    if (status === "Open" && !isCheckingOut) {
      enqueueSnackbar("Order did not go Through.", { variant: "info" });
      navigate("/cart/checkout", { state: { from: location } });
    }
  }, [status, isCheckingOut, location, navigate]);

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
