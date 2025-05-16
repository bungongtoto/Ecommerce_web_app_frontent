import "./Header.css";
import SearchBar from "../Search/SearchBar";
import { FiLogIn } from "react-icons/fi";
import { useState } from "react";
import { PiShoppingCartThin, PiTruckThin } from "react-icons/pi";
import { CiUser, CiViewList } from "react-icons/ci";
import CategoriesHeader from "../Categories/CategoriesHeader";

function Header() {
  const [islogin, setIslogin] = useState(false);
  const handleLoggedIn = () => setIslogin();
  return (
    <header>
      <div id="header-top">
        <h1>Ecommerce</h1>
        <nav>
          {!islogin && (
            <>
              <div></div>
              <div className="header-nav-tile">
                <FiLogIn className="icon" />
                <p>Login</p>
              </div>
            </>
          )}

          {islogin && (
            <>
              <div className="header-nav-tile">
                <PiTruckThin className="icon" />
                <p>Orders</p>
              </div>

              <div className="header-nav-tile">
                <CiViewList className="icon" /> <span>(1)</span>
                <p>Wish List</p>
              </div>

              <div className="header-nav-tile">
                <PiShoppingCartThin className="icon" /> <span>(2)</span>
                <p>Cart</p>
              </div>

              <div className="header-nav-tile">
                <CiUser className="icon" />
                <p>bungongkingsley</p>
              </div>
            </>
          )}
        </nav>
      </div>
      <div id="header-botom">
        <SearchBar />
      </div>
      <CategoriesHeader />
    </header>
  );
}

export default Header;
