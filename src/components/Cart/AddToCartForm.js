import { useState } from "react";
import { PulseLoader } from "react-spinners";

function AddToCartForm({ product, handleSubmit, iscartFetching }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <form onSubmit={(e) => handleSubmit(e, quantity)} className="rigth">
      <p className="price">{product?.unit_price}</p>
      <p>
        <span>Next Free</span> Delivery is available friday from 10am
      </p>
      <h3 className={product?.quantity > 0 ? "in-stock" : "out-stock"}>
        Instock
      </h3>
      <div>
        {" "}
        <label>Quantity: </label>
        <input
          id="quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min={1}
          max={product?.quantity}
        ></input>
      </div>
      <button
        className="cart-btn"
        type="submit"
        disabled={product?.quantity <= 0}
      >
        Add to Basket
      </button>

      <table>
        <tr>
          <td>Dispatches from</td>
          <td>Shirebrook England</td>
        </tr>
        <tr>
          <td>Courier</td>
          <td>Evri</td>
        </tr>
      </table>
      {iscartFetching ? (
        <PulseLoader className="loader" color="#F34325" />
      ) : (
        <button className="wish-list-btn">Product Rating</button>
      )}
    </form>
  );
}

export default AddToCartForm;
