import sampleImage from "../../resources/images/sample-product.jpg";
import QuantityTile from "../general/QuantityTile";
import { MdDelete } from "react-icons/md";

function CartProductTile() {
  const product = {
    title:
      "NINJA Air Frier Pro Max17 MEGA MEGA LOYANGYE belle foot kngong jsak jkkak skk dksl",
    description:
      "Elevate your workspace with the SmartGlow™ LED Desk Lamp — the perfect blend of modern design and smart functionality. Featuring adjustable brightness levels, color temperature control, and a flexible neck, this lamp provides optimal lighting for reading, working, or relaxing. Its touch-sensitive controls and USB charging port make it a sleek, convenient addition to any home or office.",
    price: 66.99,
    inStock: true,
  };
  return (
    <div className="cart-tile">
      <div className="cart-tile-left">
        <img src={sampleImage} alt="sample product" />
      </div>
      <div className="cart-tile-right">
        <h3>{product.title}</h3>
        <p className="price">£{product.price}</p>

        <QuantityTile />
        <p>
          <MdDelete className="delete-btn" />| <span> Save for Later</span>
        </p>
      </div>
    </div>
  );
}

export default CartProductTile;
