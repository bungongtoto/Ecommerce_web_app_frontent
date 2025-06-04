import { Link, useLocation, useNavigate } from "react-router";
import "../Login.css";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../store/auth/Auth.actions";
import AuthInfo from "../../../components/information/AuthInfo";
import { enqueueSnackbar } from "notistack";
import { PulseLoader } from "react-spinners";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isFetching, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch(loginUser({ username: email, password }));
  };

  useEffect(() => {
    if (isAuthenticated && !isFetching) {
      const from = location.state?.from?.pathname;
      enqueueSnackbar("logged In successfully.", { variant: "success" });
      if (from === undefined || from === "/auth/signup" || from === "/") {
        navigate("/");
      } else {
        navigate(location.state?.from);
      }
    }
  }, [
    isAuthenticated,
    isFetching,
    navigate,
    location.state?.from?.pathname,
    location.state?.from,
  ]);

  return (
    <main id="login">
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="example@domain.com"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <AuthInfo isError={true} messages={error} />}

        {isFetching ? (
          <PulseLoader className="loader" color="#F34325" />
        ) : (
          <button type="submit">Login</button>
        )}
        <p>
          Don't have an Account ?{" "}
          <Link to={"/auth/signup"} state={{ from: location }} replace>
            Sign Up
          </Link>
        </p>

        <p>
          forgot your password ? <Link to={"#"}>change</Link>
        </p>

        <p>OR sign up with:</p>

        <FcGoogle className="icon" />
      </form>
    </main>
  );
}

export default Login;
