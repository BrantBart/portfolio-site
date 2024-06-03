import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page">
      <h2>Oops... there was a problem finding that page.</h2>
      <Link className="btn ms-5 w-25" to="/">
        Return Home
      </Link>
    </div>
  );
}
