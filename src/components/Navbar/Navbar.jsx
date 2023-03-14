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
            <li>
              <Link to="/Shopping">Chercher des produits</Link>
            </li>
            <li>
              <Link to="Cart"> Panier </Link>
            </li>
            <li>
              <Link to="/LoginForm">Se Connecter</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
