import { IoStarOutline } from "react-icons/io5";
import "./Rating.css";

function ProductRatingTile({ average_rating, rating_count }) {
  const generateRating = (rating) => {
    let fullcount = Math.floor(rating);
    let ratings = [];

    for (let i = 0; i < 5; i++) {
      if (fullcount > 0) {
        ratings.push(<IoStarOutline className="star full" />);
        fullcount--;
      } else {
        ratings.push(<IoStarOutline className="star" />);
      }
    }

    return ratings;
  };

  const ratings = generateRating(parseFloat(average_rating));
  return (
    <div id="rating-tile">
      <p>
        {" "}
        <span>({rating_count})</span> rating ({average_rating})
      </p>
      <div className="stars">{ratings}</div>
    </div>
  );
}

export default ProductRatingTile;
