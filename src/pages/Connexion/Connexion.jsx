import React from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";

export const Connexion = () => {
  return (
    <section>
      <div className="relative md:flex bg-[#FCF4E9]">
        <div className="md:w-1/2">
          <div className="min-h-screen h-full flex flex-col after:flex-1">
            <div className="flex-1"></div>

            <div className="max-w-sm mx-auto px-4 py-8">
              <h1 className="text-3xl text-slate-800 font-bold mb-6">
                Recevoir un lien de connexion
              </h1>
              <LoginForm />
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
          aria-hidden="true"
        >
          <div className="relative max-h-screen">
            <img
              className="object-cover object-center w-full h-screen"
              src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              width="760"
              height="1024"
              alt="Authentication"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-center">
              Mes produits locaux en ligne
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
