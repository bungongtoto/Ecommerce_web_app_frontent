import { useDispatch, useSelector } from "react-redux";
import RatingForm from "./RatingForm";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { PulseLoader } from "react-spinners";
import {
  fetchProductReviews,
  postProductReview,
} from "../../store/reviews/reviews.actions";
import AuthInfo from "../information/AuthInfo";

function AddReviewForm({ product_id }) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");
  const { isAuthenticated } = useSelector((state) => state.auth);

  const { isPostingReview, postingReviewError } = useSelector(
    (state) => state.reviews
  );

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert("Login to review products");
      navigate("/auth", { state: { from: location } });
    } else {
      await dispatch(postProductReview({ product_id, comment, rating }));
      setRating(null);
      setComment("");
      await dispatch(fetchProductReviews(product_id));
    }
  };
  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h1>Rate Product</h1>
      <RatingForm rating={rating} handleRatingChange={handleRatingChange} />
      <br></br>
      <textarea
        rows={6}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="please Enter your review..."
        required
      />
      <br></br>
      {postingReviewError && (
        <AuthInfo isError={true} messages={postingReviewError} />
      )}
      {isPostingReview ? (
        <PulseLoader className="loader" color="#F34325" />
      ) : (
        <button className="cart-btn" type="submit">
          Submit
        </button>
      )}
    </form>
  );
}

export default AddReviewForm;
