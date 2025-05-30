import "./Product.css";
import ProductRatingTile from "../Rating/ProductRatingTile";
import { useNavigate } from "react-router";

function Product({ product }) {
  const navigate = useNavigate();
  return (
    <div id="product">
      <p className="price">{product?.unit_price}</p>
      <img
        onClick={() => navigate(`/product/${product?.id}`)}
        src={product?.images[0].image_url}
        alt="sample-product"
      />
      <div className="product-tile-bottom">
        <h3 onClick={() => navigate("/product/1")}>
          {product?.name.length > 50
            ? product?.name.slice(0, 50) + "..."
            : product?.name}
        </h3>
        <ProductRatingTile
          average_rating={product?.average_rating}
          rating_count={product?.rating_count}
        />
        <button className="cart-btn" onClick={() => alert("clicked")}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
