import "./Header.css";
import SearchBar from "../Search/SearchBar";
import { FiLogIn } from "react-icons/fi";
import { useState } from "react";
import { PiShoppingCartThin, PiTruckThin } from "react-icons/pi";
import { CiUser, CiViewList } from "react-icons/ci";

function Header() {
  const [islogin, setIslogin] = useState(true);
  return (
    <header>
      <div id="header-top">
        <h1>Ecommerce</h1>
        <nav>
          {!islogin && (
            <div className="header-nav-tile">
              <FiLogIn className="icon" />
              <p>Login</p>
            </div>
          )}
          <div className="header-nav-tile">
            <CiUser className="icon" />
            <p>bungongkingsley</p>
          </div>

          <div className="header-nav-tile">
            <PiTruckThin className="icon" />
            <p>Orders</p>
          </div>

          <div className="header-nav-tile">
            <PiShoppingCartThin className="icon" /> <span>(2)</span>
            <p>Cart</p>
          </div>

          <div className="header-nav-tile">
            <CiViewList className="icon" /> <span>(1)</span>
            <p>Wish List</p>
          </div>
        </nav>
      </div>
      <div id="header-botom">
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
