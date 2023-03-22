import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticatedAtom } from "../../store/atom";
import { useAtom } from "jotai";
import { Logout } from "../Logout/Logout";
import Cookie from "js-cookie";

export const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);

  useEffect(() => {
    const token = Cookie.get("token");
    setIsAuthenticated(!!token);
  }, [setIsAuthenticated]);

  return (
    <nav className="bg-[#FCF4E9] sticky top-0 border-b border-slate-200">
      <div className="px-6 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex items-center space-x-3 text-[#CD5555] font-bold">
            <Link to="/">Ambrosia Drive</Link>
          </div>

          <div className="flex items-center space-x-5">
            <Link to="/shopping">Nos produits</Link>
            {isAuthenticated && (
              <>
                <Link to="/cart">Panier</Link>
                <Link
                  to="/"
                  className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#CD5555] rounded-full sm:mx-2 hover:bg-[#CD5555] focus:outline-none focus:bg-[#CD5555]"
                >
                  <Logout />
                </Link>
              </>
            )}
            {!isAuthenticated && (
              <Link
                to="/connexion"
                className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#CD5555] rounded-full sm:mx-2 hover:bg-[#CD5555] focus:outline-none focus:bg-[#CD5555]"
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
