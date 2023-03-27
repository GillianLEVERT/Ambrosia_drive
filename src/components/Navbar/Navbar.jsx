import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticatedAtom } from "../../store/atom";
import { useAtom } from "jotai";
import { Logout } from "../Logout/Logout";
import Cookie from "js-cookie";
import { FaShoppingBasket } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";

export const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);

  useEffect(() => {
    const token = Cookie.get("token");
    setIsAuthenticated(!!token);
  }, [setIsAuthenticated]);

  return (

    <nav className="bg-[#FCF4E9] sm:text-xs lg:text-lg sticky top-0 z-50 border-b border-slate-200 ">
      <div className="px-6 sm:px-8 lg:px-16 sm:block">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex items-center space-x-3 text-[#CD5555] font-bold">
            <Link to="/">
            <img src="src/assets/images/logorouge.svg" alt="Logo Ambrosia Drive" className="w-100 h-12"/>
            </Link>
          </div>

          <div className="flex items-center sm:space-x-5">
            <Link to="/shopping" className="flex items-center sm:px-1 px-4 py-2 text-sm font-medium tracking-wide text-[#CD5555] m-1 hover:text-[#a43e3e] transition ease-in-out"> <GiFruitBowl className="mr-2 hover:rotate-45 hover:duration-300 hover:ease-in-out" style={{ fontSize: "1.5rem" }} />Nos produits</Link>
            {isAuthenticated && (
              <>
                <Link to="/cart" className="flex items-center sm:px-1 px-4 py-2 text-sm font-medium tracking-wide text-[#CD5555] hover:text-[#4e2020] transition  ease-in-out m-1"><FaShoppingBasket className="mr-2 hover:rotate-45 hover:duration-300 hover:ease-in-out" style={{ fontSize: "1.5rem" }}/> Mon Panier</Link>
                <Link
                  to="/"
                  className="sm:px-1 px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors transform bg-[#CD5555] rounded-full sm:mx-2 hover:bg-[#CD5555] focus:outline-none focus:bg-[#CD5555]"
                >
                  <Logout />
                </Link>
              </>
            )}
            {!isAuthenticated && (
              <Link
                to="/connexion"
                className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transform bg-[#CD5555] rounded-full sm:mx-2 hover:bg-[#CD5555] focus:outline-none focus:bg-[#CD5555] hover:text-[#4e2020] transition ease-in-out"
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
