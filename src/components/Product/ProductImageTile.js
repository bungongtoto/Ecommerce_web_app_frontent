import "./Product.css";
import { useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import GeneralInfo from "../information/GeneralInfo";

function ProductImageTile({ imageList, alt }) {
  const [imgIndex, setImgIndex] = useState(0);
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
        src={image.image_url}
        alt={alt}
        className={index === imgIndex ? "active" : ""}
      />
    );
  });

  return (
    <div id="product-image-tile">
      {imageList.length > 0 ? (
        <>
          <div className="top">
            <FaRegArrowAltCircleLeft
              onClick={handleLeftChick}
              className="icon"
            />
            <div className="image-container">
              <img src={imageList[imgIndex].image_url} alt={alt} />
            </div>
            <FaRegArrowAltCircleRight
              onClick={handleRightChick}
              className="icon"
            />
          </div>
          <div className="bottom">{imageListNav}</div>
        </>
      ) : (
        <GeneralInfo messages={"No images for this product."} />
      )}
    </div>
  );
}

export default ProductImageTile;
