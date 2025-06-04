import { NavLink } from "react-router";

function NotFound() {
  return (
    <main id="not-found">
      <h1>
        404 NOT FOUND: <NavLink to={"/"}>Back Home</NavLink>
      </h1>
    </main>
  );
}

export default NotFound;
