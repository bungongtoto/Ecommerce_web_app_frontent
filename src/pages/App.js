import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import AppLayOut from "../components/AppLayOut/AppLayOut";
import Products from "./Products/Products";
import Login from "./Auth/SignIn/Login";
import SignUp from "./Auth/SignUp/SignUp";
import ProductDetail from "./Products/ProductDetail";
import Cart from "./Cart/Cart";
import Orders from "./Orders/Orders";
import { SnackbarProvider } from "notistack";
import Account from "./Account/Account";
import RequireAuth from "./Auth/RequireAuth";
import Checkout from "./Checkout/Checkout";
import Return from "./Checkout/Return";
import OrderDetails from "./Orders/OrderDetails";
import ProductReview from "./Reviews/ProductReview";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <Routes>
          <Route path="/" element={<AppLayOut />}>
            <Route index element={<Products />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="product/:id/reviews" element={<ProductReview />} />

            <Route path="/auth">
              <Route index element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Route>

            <Route element={<RequireAuth />}>
              <Route path="account" element={<Account />} />
              <Route path="cart" element={<Cart />} />
              <Route path="orders">
                <Route index element={<Orders />} />
                <Route path=":order_id" element={<OrderDetails />} />
              </Route>
              <Route path="checkout" element={<Checkout />} />
            </Route>

            <Route path="return" element={<Return />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
