import { IoStarOutline } from "react-icons/io5";
import "./Rating.css";

function ProductRatingTile() {
  const rating = 3.2;
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

  const ratings = generateRating(rating);
  return (
    <div id="rating-tile">
      <p>
        {" "}
        <span>(87)</span> rarting ({rating})
      </p>
      <div className="stars">{ratings}</div>
    </div>
  );
}

export default ProductRatingTile;
