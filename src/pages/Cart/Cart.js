import "./Cart.css";
import CartProductTile from "../../components/Cart/CartProductTile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserCart } from "../../store/cart/cart.actions";
import { PulseLoader } from "react-spinners";
import GeneralInfo from "../../components/information/GeneralInfo";

function Cart() {
  const dispatch = useDispatch();

  const { cart, cartError, iscartFetching, totalPrice, totalQuantity } =
    useSelector((state) => state.cart);

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
                <button className="wish-list-btn">Checkout</button>
              </div>
            </div>
          )}

          {cartError && (
            <GeneralInfo
              isError={true}
              messages={cartError}
              btnText="Retry"
              handleAction={() => dispatch(fetchUserCart())}
            />
          )}
        </>
      )}
    </main>
  );
}

export default Cart;
