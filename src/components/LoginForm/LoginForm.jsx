import React, { useState } from "react";

export const LoginForm = () => {
  const [formEmail, setFormEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
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
        // Connexion réussie
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
      <form onSubmit={handleSubmit} className="flex">
        <input
          className="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          type="email"
          id="email"
          placeholder="Adresse Email"
          value={formEmail}
          onChange={(event) => setFormEmail(event.target.value)}
          required
        />

        {errorMessage && <div className="error">{errorMessage}</div>}

        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          {isLoading ? "Connexion en cours..." : "Se connecter"}
        </button>
      </form>
    </>
  );
};
