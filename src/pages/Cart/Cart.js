import "./Cart.css";
import CartProductTile from "../../components/Cart/CartProductTile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUserCart } from "../../store/cart/cart.actions";
import { PulseLoader } from "react-spinners";
import GeneralInfo from "../../components/information/GeneralInfo";
import { useLocation, useNavigate } from "react-router";
import { enqueueSnackbar } from "notistack";

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isInfo, setIsInfo] = useState(false);

  const { cart, cartError, iscartFetching, totalPrice, totalQuantity } =
    useSelector((state) => state.cart);

  useEffect(() => {
    if (cartError && !iscartFetching) {
      if (cartError === "No items found in your card") {
        enqueueSnackbar(`Info: ${cartError}`, { variant: "info" });
        setIsInfo(true);
      } else {
        setIsInfo(false);
      }
    }
  }, [cartError, iscartFetching]);

  useEffect(() => {
    dispatch(fetchUserCart());
  }, [dispatch]);

  const cartProductList = cart?.map((cartItem, index) => (
    <CartProductTile key={index} product={cartItem} />
  ));

  return (
    <main>
      <h1>Cart</h1>
      {iscartFetching ? (
        <PulseLoader className="loader" color="#F34325" />
      ) : (
        <>
          {cart && (
            <div id="cart">
              <div className="left">{cartProductList}</div>
              <div className="right">
                <div>
                  <h1>Number of Items:</h1>
                  <h3>{totalQuantity}</h3>
                </div>
                <h1>Total: £ {totalPrice} </h1>
                {cart && (
                  <button
                    onClick={() =>
                      navigate("/checkout", { state: { from: location } })
                    }
                    className="wish-list-btn"
                  >
                    Checkout
                  </button>
                )}
              </div>
            </div>
          )}

          {cartError && (
            <GeneralInfo
              isError={!isInfo}
              messages={cartError}
              btnText={isInfo ? "Go Home" : "Retry"}
              handleAction={() =>
                isInfo ? navigate("/") : dispatch(fetchUserCart())
              }
            />
          )}
        </>
      )}
    </main>
  );
}

export default Cart;
