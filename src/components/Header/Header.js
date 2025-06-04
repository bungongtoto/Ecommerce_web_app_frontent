import "./Header.css";
import SearchBar from "../Search/SearchBar";
import { FiLogIn } from "react-icons/fi";
import { PiShoppingCartThin, PiTruckThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import CategoriesHeader from "../Categories/CategoriesHeader";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkLoggedInStatus } from "../../store/auth/Auth.actions";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(checkLoggedInStatus());
  }, [isAuthenticated, dispatch]);

  return (
    <header>
      <div id="header-top">
        <h1 onClick={() => navigate("/")}>Ecommerce</h1>
        <nav>
          {!isAuthenticated && (
            <>
              <div></div>
              <div
                onClick={() => navigate("/auth")}
                className="header-nav-tile"
              >
                <FiLogIn className="icon" />
                <p>Login</p>
              </div>
            </>
          )}

          {isAuthenticated && (
            <>
              <div
                onClick={() => navigate("/orders")}
                className="header-nav-tile"
              >
                <PiTruckThin className="icon" />
                <p>Orders</p>
              </div>

              <div
                onClick={() => navigate("/cart")}
                className="header-nav-tile"
              >
                <PiShoppingCartThin className="icon" />{" "}
                <span>({cart?.length ? cart.length : 0})</span>
                <p>Cart</p>
              </div>

              <div
                onClick={() => navigate("/account")}
                className="header-nav-tile"
              >
                <CiUser className="icon" />
                <p>
                  {user?.first_name
                    ? user.first_name
                    : user?.email.slice(0, 10)}
                </p>
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
