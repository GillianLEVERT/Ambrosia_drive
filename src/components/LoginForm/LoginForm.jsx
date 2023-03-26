import React, { useState } from "react";

export const LoginForm = () => {
  const [formEmail, setFormEmail] = useState("");
  const [consentChecked, setConsentChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!consentChecked) {
      setErrorMessage("Merci de cocher le consentement RGPD.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        `https://ambrosiaserver.fly.dev/api/authentication/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user: { email: formEmail } }),
        }
      );

      if (response.ok) {
        setErrorMessage("");

      } else {
        const { error } = await response.json();
        setErrorMessage(error);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Une erreur s'est produite, veuillez réessayer plus tard."
      );
    }

    setIsLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col">
  <div className="flex flex-col">
    <input
      className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
      type="email"
      id="email"
      placeholder="Adresse Email"
      value={formEmail}
      onChange={(event) => setFormEmail(event.target.value)}
      required
    />
  </div>

  {errorMessage && <div className="text-red-600">{errorMessage}</div>}

  <button
    type="submit"
    disabled={isLoading}
    className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#CD5555] rounded-md hover:bg-[#b94d4d] focus:outline-none focus:bg-[#b94d4d]"
  >
    {isLoading ? "Connexion en cours..." : "Se connecter"}
  </button>

  <div className="flex items-center mt-2">
    <input
      type="checkbox"
      id="consent"
      className="mr-2"
      checked={consentChecked}
      onChange={() => setConsentChecked(!consentChecked)}
      required
    />
    <label htmlFor="consent" className="text-sm text-gray-700">
      J'accepte le traitement de mes données personnelles conformément à la RGPD.
    </label>
  </div>
</form>

    </>
  );
};
