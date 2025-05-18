import { Link } from "react-router";
import "../Login.css";
import { FcGoogle } from "react-icons/fc";

function SignUp() {
  return (
    <main id="login">
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" placeholder="example@domain.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" />

        <label htmlFor="confirm-password">Confirm Password:</label>
        <input id="confirm-password" type="password" />

        <button>SignUp</button>
        <p>
          Already have an Account ? <Link to={"/auth"}>Sign In</Link>
        </p>

        <p>OR sign up with:</p>

        <FcGoogle className="icon" />
      </form>
    </main>
  );
}

export default SignUp;
