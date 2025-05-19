import "./Product.css";
import sample_image from "../../../resources/images/sample-product.jpg";
import ProductRatingTile from "../Rating/ProductRatingTile";

function Product() {
  const title =
    "NINJA Air Frier Pro Max17 MEGA MEGA LOYANGYE belle foot kngong jsak jkkak skk dksl";
  return (
    <div id="product">
      <img src={sample_image} alt="sample-product" />
      <div className="product-tile-bottom">
        <h5>{title.length > 50 ? title.slice(0, 50) + "..." : title}</h5>
        <ProductRatingTile />
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;
