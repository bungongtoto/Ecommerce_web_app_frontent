import { IoIosCloseCircleOutline } from "react-icons/io";
import "./Categories.css";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import GeneralInfo from "../information/GeneralInfo";
import { fetchProductCategories } from "../../store/categories/categories.actions";
import { useNavigate } from "react-router";

function AllCategories({ open, setOpen }) {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const { categories, isCategoriesFetching, categoriesError } = useSelector(
    (state) => state.categories
  );

  const categoriesList = categories?.map((category, index) => (
    <li
      key={index}
      onClick={() => {
        navigate(`/?category_id=${category.id}`);
        setOpen(false);
      }}
    >
      {category.name}
    </li>
  ));

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);

  return (
    <div
      ref={menuRef}
      id="more-menu"
      className={open ? "more-menu-open" : "more-menu-close"}
    >
      <div className="more-menu-header">
        <IoIosCloseCircleOutline
          onClick={() => setOpen(false)}
          className="icon"
        />
        <h1>Categories</h1>
      </div>
      {isCategoriesFetching ? (
        <PulseLoader className="loader" color="#F34325" />
      ) : (
        categories && <ul className="scroll-container">{categoriesList}</ul>
      )}
      {categoriesError && (
        <GeneralInfo
          isError={true}
          messages={categoriesError}
          btnText="Try Again"
          handleAction={() => {
            dispatch(fetchProductCategories());
          }}
        />
      )}
    </div>
  );
}

export default AllCategories;
