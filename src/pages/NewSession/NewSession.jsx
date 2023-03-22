import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { isAuthenticatedAtom } from "../../store/atom";

export const NewSession = () => {
  const navigate = useNavigate();
  const [,setIsAuthenticated] = useAtom(isAuthenticatedAtom);
  const urlParams = new URLSearchParams(window.location.search);
  const loginToken = urlParams.get("login_token");
  const [token, setToken] = useState(null);

  useEffect(() => {
    fetch(
      `https://ambrosiaserver.fly.dev/api/sessions/create?login_token=${loginToken}`,
      {
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setToken(response.auth_token);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleAuthentication = (token) => {
    Cookies.set("token", token, { expires: 7 });
    setIsAuthenticated(true);
    navigate("/");
  };

  useEffect(() => {
    if (token) {
      handleAuthentication(token);
    }
  }, [token]);

  return <></>;
};