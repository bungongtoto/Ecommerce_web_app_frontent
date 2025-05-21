import "./Product.css";

import image1 from "../../../resources/images/sample-product.jpg";
import image2 from "../../../resources/images/sample-2.jpeg";
import image3 from "../../../resources/images/sample-3.jpg";
import { useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

function ProductImageTile() {
  const imageList = [image1, image2, image3];
  const [imgIndex, setImgIndex] = useState(2);
  const handleLeftChick = () => {
    const newIndex = imgIndex - 1;
    if (newIndex >= 0 && newIndex < imageList.length) {
      setImgIndex(newIndex);
    }
  };
  const handleRightChick = () => {
    const newIndex = imgIndex + 1;
    if (newIndex >= 0 && newIndex < imageList.length) {
      setImgIndex(newIndex);
    }
  };

  const imageListNav = imageList.map((image, index) => {
    console.log(index);
    return (
      <img
        key={index}
        src={image}
        alt={"product"}
        className={index === imgIndex ? "active" : ""}
      />
    );
  });

  return (
    <div id="product-image-tile">
      <div className="top">
        <FaRegArrowAltCircleLeft onClick={handleLeftChick} className="icon" />
        <div className="image-container">
          <img src={imageList[imgIndex]} alt="first sample" />
        </div>
        <FaRegArrowAltCircleRight onClick={handleRightChick} className="icon" />
      </div>
      <div className="bottom">{imageListNav}</div>
    </div>
  );
}

export default ProductImageTile;
