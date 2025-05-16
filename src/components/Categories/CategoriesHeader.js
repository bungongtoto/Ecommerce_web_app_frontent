import { CiCircleMore } from "react-icons/ci";
import "./Categories.css";
import { useState } from "react";
import AllCategories from "./AllCategories";

function CategoriesHeader() {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div id="categories-header">
        <h3>Popular Categories</h3>
        <ul>
          <li>Electronics</li>
          <li>Clothing</li>
          <li>Home & Kitchen</li>
          <li>Health & Beauty</li>
          <li>Sports & Outdoors</li>
          <li>Snickers</li>
        </ul>
        <div onClick={() => setShowMore(true)} id="more-tile">
          <CiCircleMore className="icon" />
          <p>More</p>
        </div>
      </div>
      <AllCategories open={showMore} setOpen={setShowMore} />
    </>
  );
}

export default CategoriesHeader;
