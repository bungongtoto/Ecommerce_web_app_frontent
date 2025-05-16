import { IoIosCloseCircleOutline } from "react-icons/io";
import "./Categories.css";
import { useRef, useEffect } from "react";

function AllCategories({ open, setOpen }) {
  const menuRef = useRef(null);

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
      <ul className="scroll-container">
        <li>Electronics</li>
        <li>Clothing</li>
        <li>Home & Kitchen</li>
        <li>Health & Beauty</li>
        <li>Sports & Outdoors</li>
        <li>Snickers</li>
        <li>Electronics</li>
        <li>Clothing</li>
        <li>Home & Kitchen</li>
        <li>Health & Beauty</li>
        <li>Sports & Outdoors</li>
        <li>Snickers</li>
        <li>Electronics</li>
        <li>Clothing</li>
        <li>Home & Kitchen</li>
        <li>Health & Beauty</li>
        <li>Sports & Outdoors</li>
        <li>Snickers</li>
        <li>Electronics</li>
        <li>Clothing</li>
        <li>Home & Kitchen</li>
        <li>Health & Beauty</li>
        <li>Sports & Outdoors</li>
        <li>Snickers</li>
      </ul>
    </div>
  );
}

export default AllCategories;
