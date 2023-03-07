import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h1>Error 404 Page Not Found</h1>
      <ul>
        <li>
          <Link to="/"> Back </Link>
        </li>
      </ul>
    </>
  );
};
