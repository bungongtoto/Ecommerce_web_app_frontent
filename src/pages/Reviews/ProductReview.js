import { useParams } from "react-router";
import "./ProductReview.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductReviews } from "../../store/reviews/reviews.actions";
import AddReviewForm from "../../components/Reviews/AddReviewForm";
import { fetchProductById } from "../../store/detailProduct/detailProduct.actions";
import ProductRatingTile from "../../components/Rating/ProductRatingTile";
import ProductImageTile from "../../components/Product/ProductImageTile";
import Reviews from "../../components/Reviews/Reviews";
import { PulseLoader } from "react-spinners";
import { enqueueSnackbar } from "notistack";

function ProductReview() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { reviews, isReviewsFetching, reviewsError } = useSelector(
    (state) => state.reviews
  );
  const { product, isProductLoading, errorProduct } = useSelector(
    (state) => state.detailProduct
  );

  useEffect(() => {
    dispatch(fetchProductById(id));
    dispatch(fetchProductReviews(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (reviewsError && !isReviewsFetching) {
      enqueueSnackbar(`Info: ${reviewsError}`, { variant: "info" });
    }

    if (errorProduct && !isProductLoading) {
      enqueueSnackbar(`Info: ${errorProduct}`, { variant: "info" });
    }
  }, [reviewsError, errorProduct, isProductLoading, isReviewsFetching]);

  return (
    <main id="product-review">
      <>
        {isProductLoading ? (
          <PulseLoader className="loader" color="#F34325" />
        ) : (
          product && (
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
          )
        )}
        <div className="right">
          <AddReviewForm product_id={id} />
          <br></br>
          <h1>Reviews</h1>
          {isReviewsFetching ? (
            <PulseLoader className="loader" color="#F34325" />
          ) : reviews ? (
            <Reviews reviews={reviews} />
          ) : (
            <p>No reviews Yet</p>
          )}
        </div>
      </>
    </main>
  );
}

export default ProductReview;
