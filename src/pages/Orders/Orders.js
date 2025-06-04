import { useDispatch, useSelector } from "react-redux";
import "./Orders.css";
import OrderTile from "../../components/Orders/OrderTile";
import { useEffect, useState } from "react";
import { fetchOrders } from "../../store/orders/orders.actions";
import { PulseLoader } from "react-spinners";
import GeneralInfo from "../../components/information/GeneralInfo";
import { useNavigate } from "react-router";

function Orders() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isInfo, setIsInfo] = useState(false);
  const { orders, isOrdersFetching, ordersError } = useSelector(
    (state) => state.orders
  );
  const orderList = orders?.map((order, index) => (
    <OrderTile key={index} order={order} />
  ));

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  useEffect(() => {
    if (!isOrdersFetching && ordersError !== null) {
      if (ordersError === "No Orders found") {
        setIsInfo(true);
      } else {
        setIsInfo(false);
      }
    }
  }, [ordersError, isOrdersFetching]);

  return (
    <main id="orders">
      {isOrdersFetching ? (
        <PulseLoader className="loader" color="#F34325" />
      ) : (
        orders && (
          <table>
            <thead>
              <tr id="table-heading">
                <th colSpan={4}>Order History</th>
              </tr>
              <tr>
                <th>Order ID</th>
                <th>Order Status</th>
                <th>Total Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>{orderList}</tbody>
          </table>
        )
      )}

      {ordersError && (
        <GeneralInfo
          isError={!isInfo}
          messages={ordersError}
          btnText={isInfo ? "Back Home" : "Retry"}
          handleAction={() =>
            isInfo ? navigate("/") : dispatch(fetchOrders())
          }
        />
      )}
    </main>
  );
}

export default Orders;
