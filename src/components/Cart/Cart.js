import "./Cart.css";
import CartProductTile from "./CartProductTile";

function Cart() {
  return (
    <main>
      <h1>Cart</h1>
      <div id="cart">
        <div className="left">
          <CartProductTile />
          <CartProductTile />
          <CartProductTile />
          <CartProductTile />
        </div>
        <div className="right">
          <div>
            <h1>Number of Items:</h1>
            <h3>7</h3>
          </div>
          <h1>Total: £788.21 </h1>
          <button className="wish-list-btn">Checkout</button>
        </div>
      </div>
    </main>
  );
}

export default Cart;
