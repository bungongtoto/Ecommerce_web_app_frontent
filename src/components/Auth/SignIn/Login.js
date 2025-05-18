import { Link } from "react-router";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <main id="login">
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" placeholder="example@domain.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" />

        <button>Login</button>
        <p>
          Don't have an Account ? <Link to={"#"}>Sign Up</Link>
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
