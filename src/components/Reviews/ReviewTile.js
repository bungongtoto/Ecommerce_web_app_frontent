import ProductRatingTile from "../Rating/ProductRatingTile";

function ReviewTile({ review }) {
  return (
    <div className="review-tile">
      <h4>
        {review.user.first_name
          ? review.user.first_name
          : "user_" + review.user_id}
      </h4>
      <ProductRatingTile average_rating={review.rating} />
      <p>{review.comment}</p>
    </div>
  );
}

export default ReviewTile;
