import { useDispatch, useSelector } from "react-redux";
import QuantityTile from "../general/QuantityTile";
import { MdDelete } from "react-icons/md";
import {
  deleteProductFromCart,
  fetchUserCart,
  updateProductFromCart,
} from "../../store/cart/cart.actions";
import { enqueueSnackbar } from "notistack";
import { addQuantity, subTractQuantity } from "../../store/cart/cart.reducers";

function CartProductTile({ product }) {
  const dispatch = useDispatch();
  const {
    isDeleteProductLoading,
    deleteProductError,
    isUpdateProductLoading,
    updateProductError,
  } = useSelector((state) => state.cart);

  const handleDelete = async () => {
    await dispatch(deleteProductFromCart(product.product_id));
    if (!isDeleteProductLoading && deleteProductError == null) {
      enqueueSnackbar("Product removed.", { variant: "success" });
      dispatch(fetchUserCart());
    } else {
      enqueueSnackbar(`An Error: ${deleteProductError}`, { variant: "error" });
    }
  };

  const handleUpdate = async (quantity, isAdd = true) => {
    await dispatch(
      updateProductFromCart({ product_id: product.product_id, quantity })
    );
    if (isUpdateProductLoading && updateProductError != null) {
      enqueueSnackbar(`An Error: ${updateProductError}`, { variant: "error" });
    } else {
      isAdd
        ? dispatch(addQuantity({ product_id: product.product_id }))
        : dispatch(subTractQuantity({ product_id: product.product_id }));
    }
  };
  return (
    <div className="cart-tile">
      <div className="cart-tile-left">
        <img
          src={product?.product_details.images[0].image_url}
          alt={product?.product_details.name}
        />
      </div>
      <div className="cart-tile-right">
        <h3>{product?.product_details.name}</h3>
        <p className="price">{product?.product_details.unit_price}</p>

        <QuantityTile
          value={product?.quantity}
          max={product?.product_details.quantity}
          handleUpdate={handleUpdate}
        />
        <p>
          <MdDelete onClick={handleDelete} className="delete-btn" />
          <span> Remove</span>
        </p>
      </div>
    </div>
  );
}

export default CartProductTile;
