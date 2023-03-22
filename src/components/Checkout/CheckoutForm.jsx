import React from "react";

export const CheckoutForm = () => {
  const handleClick = () => {
    fetch(`http://localhost:3000/paiement/create`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.href = `${data.session_url}`;
      })
      .catch((error) => console.log(error));
  };
  return <button onClick={handleClick}>PAYER</button>;
};
