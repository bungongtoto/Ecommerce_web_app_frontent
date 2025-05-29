import { Link, useLocation, useNavigate } from "react-router";
import "../Login.css";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import AuthInfo from "../../../components/information/AuthInfo";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../store/auth/Auth.actions";
import { enqueueSnackbar } from "notistack";
import { PulseLoader } from "react-spinners";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { error, isFetching, isSuccess } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordmatch] = useState(true);

  const handleRegister = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordmatch(false);
      return;
    }
    setPasswordmatch(true);
    await dispatch(registerUser({ email, password }));
  };

  useEffect(() => {
    if (isSuccess && !isFetching) {
      enqueueSnackbar("Registration Success. Login", { variant: "info" });
      navigate("/auth");
    }
  }, [isSuccess, isFetching, navigate]);

  return (
    <main id="login">
      <form onSubmit={handleRegister}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          placeholder="example@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          id="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {!passwordMatch && (
          <AuthInfo isError={true} messages={"password must match."} />
        )}

        {error && <AuthInfo isError={true} messages={error} />}
        {isFetching ? (
          <PulseLoader className="loader" color="#F34325" />
        ) : (
          <button type="submit">SignUp</button>
        )}

        <p>
          Already have an Account ?{" "}
          <Link to={"/auth"} state={{ from: location }} replace>
            Sign In
          </Link>
        </p>

        <p>OR sign up with:</p>

        <FcGoogle className="icon" />
      </form>
    </main>
  );
}

export default SignUp;
