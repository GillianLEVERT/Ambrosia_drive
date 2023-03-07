import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/user"> UserPage </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
