function OrderTile({ order }) {
  return (
    <tr id="order-tile">
      <td>{order.id}</td>
      <td>{order.order_status}</td>
      <td>{order.total_price}</td>
      <td>{order.timestamp}</td>
    </tr>
  );
}

export default OrderTile;
