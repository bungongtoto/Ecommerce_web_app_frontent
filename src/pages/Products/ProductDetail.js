import "./Products.css";
import ProductImageTile from "../../components/Product/ProductImageTile";
import ProductRatingTile from "../../components/Rating/ProductRatingTile";
import { useLocation, useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../store/detailProduct/detailProduct.actions";
import { PulseLoader } from "react-spinners";
import GeneralInfo from "../../components/information/GeneralInfo";
import AddToCartForm from "../../components/Cart/AddToCartForm";
import { addProductTocart } from "../../store/cart/cart.actions";
import { enqueueSnackbar } from "notistack";

function ProductDetail() {
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.auth);

  const { product, isProductLoading, errorProduct } = useSelector(
    (state) => state.detailProduct
  );

  const { isAddProductLoading, addProductError } = useSelector(
    (state) => state.cart
  );

  const handleAddToCart = async (e, quantity) => {
    e.preventDefault();
    if (isAuthenticated) {
      await dispatch(addProductTocart({ product_id: product?.id, quantity }));
      if (!isAddProductLoading && addProductError === null) {
        navigate("/cart");
        enqueueSnackbar("Product Added", { variant: "success" });
      } else {
        enqueueSnackbar(`An Error: ${addProductError}`, { variant: "error" });
      }
    } else {
      alert("Not Authenticated, please Login.");
      navigate("/auth", { state: { from: location } });
    }
  };

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
            <AddToCartForm
              product={product}
              handleSubmit={handleAddToCart}
              isAddProductLoading={isAddProductLoading}
            />
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
