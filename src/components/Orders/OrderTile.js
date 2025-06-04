import { useNavigate } from "react-router";

function OrderTile({ order }) {
  const navigate = useNavigate();
  return (
    <tr onClick={() => navigate(`/orders/${order?.id}`)} id="order-tile">
      <td>{order.id}</td>
      <td>{order.order_status}</td>
      <td>{order.total_price}</td>
      <td>{order.timestamp}</td>
    </tr>
  );
}

export default OrderTile;
