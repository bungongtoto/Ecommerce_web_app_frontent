import ProductRatingTile from "../Rating/ProductRatingTile";

function OrderItemTile({ orderItem }) {
  return (
    <div className="order-item-tile">
      <img src={orderItem.images[0].image_url} alt={orderItem.name} />

      <div>
        <h3>{orderItem.name}</h3>

        <p>Price at Purchase: {orderItem.unit_price_at_purchase}</p>
        <p>Quantity(units): {orderItem.quantity}</p>
        <br></br>
        <button
          onClick={() => alert("Rating Clicked.")}
          className="wish-list-btn"
        >
          Product Rating
        </button>
        <br></br>
        <ProductRatingTile
          average_rating={orderItem.average_rating}
          rating_count={orderItem.rating_count}
        />
      </div>
    </div>
  );
}

export default OrderItemTile;
