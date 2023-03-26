import React from "react";
import Cookies from "js-cookie";
import { useAtom } from "jotai";
import { isAuthenticatedAtom } from "../../store/atom";

export const Logout = () => {
  const [, setIsAuthenticated] = useAtom(isAuthenticatedAtom);

  const handleLogout = () => {
    Cookies.remove("token");

    setIsAuthenticated(false);
  };

  return <button onClick={handleLogout} className="hover: text-[#4e2020] transition duration-300 ease-in-out">Se déconnecter</button>;
};
