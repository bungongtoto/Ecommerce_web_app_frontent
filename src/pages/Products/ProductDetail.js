import "./Products.css";
import ProductImageTile from "../../components/Product/ProductImageTile";
import ProductRatingTile from "../../components/Rating/ProductRatingTile";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../store/detailProduct/detailProduct.actions";
import { PulseLoader } from "react-spinners";
import GeneralInfo from "../../components/information/GeneralInfo";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const { product, isProductLoading, errorProduct } = useSelector(
    (state) => state.detailProduct
  );

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  return (
    <main id="product-detail">
      {isProductLoading ? (
        <PulseLoader className="loader" color="#F34325" />
      ) : (
        <>
          {product && (
            <div className="left">
              <h2>{product?.name}</h2>
              <div>
                <ProductRatingTile
                  average_rating={product?.average_rating}
                  rating_count={product?.rating_count}
                />
              </div>
              <p>{product?.description}</p>
              <ProductImageTile
                imageList={product?.images}
                alt={product?.name}
              />
            </div>
          )}

          {product && (
            <form onSubmit={(e) => e.preventDefault()} className="rigth">
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
              <button className="wish-list-btn">Add To Wish List</button>
            </form>
          )}
        </>
      )}

      {errorProduct && (
        <GeneralInfo
          isError={true}
          messages={errorProduct}
          btnText="Try Again"
          handleAction={() => dispatch(fetchProductById(id))}
        />
      )}
    </main>
  );
}

export default ProductDetail;
