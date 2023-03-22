import { Link } from "react-router-dom";
import { isAuthenticatedAtom } from "../../store/atom";
import { useAtom } from "jotai";
import { Logout } from "../Logout/Logout";

export const Navbar = () => {
  const [isAuthenticated] = useAtom(isAuthenticatedAtom);
  
  return (
    <nav className="sticky top-0 bg-white border-b border-slate-200">
      <div className="px-6 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex items-center space-x-3">
            <Link to="/">Accueil</Link>
          </div>

          <div className="flex items-center space-x-5">
            <Link to="/shopping">Nos produits</Link>
            {isAuthenticated && (
              <>
                <Link to="/cart">Panier</Link>
                <Link
                  to="/"
                  className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-full sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  <Logout/>
                </Link>
              </>
            )}
            {!isAuthenticated && (
              <Link
                to="/connexion"
                className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-full sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Se Connecter
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
