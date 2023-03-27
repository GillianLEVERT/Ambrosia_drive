import React from "react";
import Cookies from "js-cookie";
import { useSetAtom } from "jotai";
import { sessionIdAtom } from "../../store/atom";
export const CheckoutForm = () => {
  const setSessionId = useSetAtom(sessionIdAtom);
  const handleClick = () => {
    fetch(`https://ambrosiaserver.fly.dev//paiement/create`, {
      method: "POST",
      headers: {
        Authorization: Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSessionId(data.session_id);
        window.location.href = `${data.session_url}`;
      })
      .catch((error) => console.error(error));
  };
  return <button onClick={handleClick}>PAYER</button>;
};
