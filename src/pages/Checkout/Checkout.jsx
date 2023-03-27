import React, { useEffect } from "react";
import { useAtomValue } from "jotai";
import { sessionIdAtom } from "../../store/atom";
import Cookies from "js-cookie";
import ReactEmoji from "react-emoji-render";
import confetti from "canvas-confetti";

export const Checkout = () => {
  const sessionId = useAtomValue(sessionIdAtom);
  const checkoutStatus = new URLSearchParams(window.location.search).get(
    "success"
  );

  useEffect(() => {
    if (sessionId) {
      fetch(`https://ambrosiaserver.fly.dev//paiement/success`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: Cookies.get("token"),
        },
        body: JSON.stringify({
          session_id: sessionId,
        }),
      }).then(() => {
        if (checkoutStatus === "true") {
          confetti();
        }
      });
    }
  }, [sessionId]);

  let message, imageSrc, imageAlt;
  if (checkoutStatus === "true") {
    message = "Votre commande a bien été prise en compte !";
  } else {
    message = "Oops, votre paiement n'a pas abouti ! Veuillez réessayer.";
    imageSrc = "https://media.giphy.com/media/PmdKelpo4p0rKEWeXQ/giphy.gif";
    imageAlt = "Paiement échoué";
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mx-11">{message}</h1>
        {imageSrc && (
          <img
            className="mx-auto mt-6 rounded-xl"
            src={imageSrc}
            alt={imageAlt}
            style={{ maxWidth: "40%", height: "auto" }}
          />
        )}
      </div>
    </div>
  );
};
