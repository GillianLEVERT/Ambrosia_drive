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
        "http://localhost:3000/api/authentication/create",
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Adresse e-mail :</label>
      <input
        type="email"
        id="email"
        value={formEmail}
        onChange={(event) => setFormEmail(event.target.value)}
        required
      />

      {errorMessage && <div className="error">{errorMessage}</div>}

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Connexion en cours..." : "Se connecter"}
      </button>
    </form>
  );
};
