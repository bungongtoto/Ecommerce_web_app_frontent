import { CiCircleMore } from "react-icons/ci";
import "./Categories.css";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
import AllCategories from "./AllCategories";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function CategoriesHeader() {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const { categories, isCategoriesFetching } = useSelector(
    (state) => state.categories
  );
  const categoriesList = categories?.slice(0, 5).map((category, index) => (
    <li key={index} onClick={() => navigate(`/?category_id=${category.id}`)}>
      {category.name}
    </li>
  ));
  return (
    <>
      <div id="categories-header">
        <h3 onClick={() => navigate("/")}>Popular Products</h3>
        {isCategoriesFetching ? (
          <PulseLoader className="loader" color="#F34325" />
        ) : (
          <ul>{categoriesList}</ul>
        )}
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
