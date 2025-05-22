import ProductImageTile from "./Product/ProductImageTile";
import "./Products.css";
import ProductRatingTile from "./Rating/ProductRatingTile";

function ProductDetail() {
  const product = {
    title:
      "NINJA Air Frier Pro Max17 MEGA MEGA LOYANGYE belle foot kngong jsak jkkak skk dksl",
    description:
      "Elevate your workspace with the SmartGlow™ LED Desk Lamp — the perfect blend of modern design and smart functionality. Featuring adjustable brightness levels, color temperature control, and a flexible neck, this lamp provides optimal lighting for reading, working, or relaxing. Its touch-sensitive controls and USB charging port make it a sleek, convenient addition to any home or office.",
    price: 66.99,
    inStock: true,
  };
  return (
    <main id="product-detail">
      <div className="left">
        <h2>{product.title}</h2>
        <div>
          <ProductRatingTile />
        </div>
        <p>{product.description}</p>
        <ProductImageTile />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="rigth">
        <p className="price">£{product.price}</p>

        <p>
          <span>Next Free</span> Delivery is available friday from 10am
        </p>

        <h3 className={product.inStock ? "in-stock" : "out-stock"}>Instock</h3>
        <div>
          {" "}
          <label>Quantity: </label>
          <input
            id="quantity"
            type="number"
            value={1}
            min={1}
            max={100}
          ></input>
        </div>

        <button className="cart-btn" type="submit">
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

        <button className="wish-list-btn">Add To Wish List</button>
      </form>
    </main>
  );
}

export default ProductDetail;
