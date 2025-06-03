import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import "./General.css";
import { useState } from "react";

function QuantityTile({ value = 1, max = Infinity, handleUpdate }) {
  const [quantity, setQuantity] = useState(value);

  // const updateQuantity = () => {
  //   handleUpdate(quantity);
  // };

  const handleMinus = () => {
    const value = quantity - 1;
    if (value >= 1) {
      setQuantity(value);
      handleUpdate(value, false);
    }
  };
  const handleAdd = () => {
    const value = quantity + 1;
    if (value < max) {
      setQuantity(value);
      handleUpdate(value);
    }
  };

  const handleOnChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value);
    handleUpdate(value);
  };

  return (
    <div>
      <div id="quantity-form">
        <CiCircleMinus className="qty-btn" onClick={handleMinus} />
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={handleOnChange}
          disabled={true}
          max={max}
        />
        <IoIosAddCircleOutline className="qty-btn" onClick={handleAdd} />
      </div>
    </div>
  );
}

export default QuantityTile;
