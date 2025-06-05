import { useParams } from "react-router";
import "./Orders.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderItems } from "../../store/orders/orders.actions";
import OrderTile from "../../components/Orders/OrderTile";
import { PulseLoader } from "react-spinners";
import GeneralInfo from "../../components/information/GeneralInfo";
import OrderItemTile from "../../components/Orders/OrderItemTile";
function OrderDetails() {
  const { order_id } = useParams();
  const dispatch = useDispatch();

  const { order, isOrderFetching, orderError } = useSelector(
    (state) => state.orders.viewOrder
  );

  useEffect(() => {
    dispatch(fetchOrderItems(order_id));
  }, [order_id, dispatch]);

  const orderItems = order?.order_items.map((item, index) => (
    <OrderItemTile key={index} orderItem={item} />
  ));
  return (
    <main id="order-details">
      {isOrderFetching ? (
        <PulseLoader className="loader" color="#F34325" />
      ) : (
        order && (
          <>
            <table>
              <thead>
                <tr id="table-heading">
                  <th colSpan={4}>Order Details</th>
                </tr>
                <tr>
                  <th>Order ID</th>
                  <th>Order Status</th>
                  <th>Total Price</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <OrderTile order={order} />
              </tbody>
            </table>

            <h1>Order Items</h1>

            <div id="order-items-list">{orderItems}</div>
          </>
        )
      )}

      {orderError && <GeneralInfo />}
    </main>
  );
}

export default OrderDetails;
