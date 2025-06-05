import { useEffect } from "react";
import ReviewTile from "./ReviewTile";

function Reviews({ reviews }) {
  useEffect(() => {}, [reviews]);
  const reviewList = reviews?.map((review, index) => (
    <ReviewTile key={index} review={review} />
  ));
  return <div id="reviews">{reviewList}</div>;
}

export default Reviews;
