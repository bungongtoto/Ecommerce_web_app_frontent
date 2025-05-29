import { IoIosCloseCircleOutline } from "react-icons/io";
import "./Categories.css";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import GeneralInfo from "../information/GeneralInfo";
import { fetchProductCategories } from "../../store/categories/categories.actions";

function AllCategories({ open, setOpen }) {
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const { categories, isCategoriesFetching, categoriesError } = useSelector(
    (state) => state.categories
  );

  const categoriesList = categories?.map((category) => (
    <li>{category.name}</li>
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
        <h1>Categories</h1>
        <IoIosCloseCircleOutline
          onClick={() => setOpen(false)}
          className="icon"
        />
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
          handleAction={() => dispatch(fetchProductCategories())}
        />
      )}
    </div>
  );
}

export default AllCategories;
