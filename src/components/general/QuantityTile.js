import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import "./General.css";
import { useState } from "react";

function QuantityTile({ value = 1 }) {
  const [quantity, setQuantity] = useState(value);
  const handleMinus = () => {};
  const handleAdd = () => {};
  return (
    <div>
      <div id="quantity-form">
        <CiCircleMinus className="qty-btn" onClick={handleMinus} />
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <IoIosAddCircleOutline className="qty-btn" onClick={handleAdd} />
      </div>
    </div>
  );
}

export default QuantityTile;
