function RatingForm({ rating, handleRatingChange }) {
  return (
    <div className="rating form">
      {[1, 2, 3, 4, 5].map((value) => (
        <label key={value}>
          <input
            type="radio"
            name="rating"
            value={value}
            checked={rating === String(value)}
            onChange={handleRatingChange}
            required
          />
          {value}
        </label>
      ))}
    </div>
  );
}

export default RatingForm;
