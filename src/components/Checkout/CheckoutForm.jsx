import React from "react";
import Cookies from "js-cookie"
export const CheckoutForm = () => {
  const handleClick = () => {
    fetch(`https://ambrosia-drive-git-development-gillianlevert.vercel.app/paiement/create`, {
      method: "POST",
      headers: {
        Authorization: Cookies.get("token")
      },
    })
      .then((response) => response.json())
      .then((data) => {
        
        window.location.href = `${data.session_url}`;
      })
      .catch((error) => console.error(error));
  };
  return <button onClick={handleClick}>PAYER</button>;
};
