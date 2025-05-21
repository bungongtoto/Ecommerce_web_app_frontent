import "./Product.css";
import sample_image from "../../../resources/images/sample-product.jpg";
import ProductRatingTile from "../Rating/ProductRatingTile";
import { useNavigate } from "react-router";

function Product() {
  const navigate = useNavigate();
  const title =
    "NINJA Air Frier Pro Max17 MEGA MEGA LOYANGYE belle foot kngong jsak jkkak skk dksl";
  return (
    <div id="product">
      <img
        onClick={() => navigate("/product/1")}
        src={sample_image}
        alt="sample-product"
      />
      <div className="product-tile-bottom">
        <h5 onClick={() => navigate("/product/1")}>
          {title.length > 50 ? title.slice(0, 50) + "..." : title}
        </h5>
        <ProductRatingTile />
        <button className="cart-button" onClick={() => alert("clicked")}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
