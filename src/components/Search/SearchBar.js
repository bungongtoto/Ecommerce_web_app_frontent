import { CiSearch } from "react-icons/ci";
import "./SearchBar.css";

function SearchBar() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("This Service is still in development.");
      }}
      id="search-bar"
    >
      <input type="text" placeholder="Search words..." />
      <button type="submit">
        <CiSearch className="icon" />
      </button>
    </form>
  );
}

export default SearchBar;
