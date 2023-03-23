import React from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";

export const Connexion = () => {
  return (
    <section className="px-6 sm:px-8 lg:px-16 py-4 sm:py-6 lg:py-8">
    <div className="relative md:flex">
      {/* Content */}
      <div className="md:w-1/2">
        <div className="min-h-screen h-full flex flex-col after:flex-1">
          {/* Header */}
          <div className="flex-1">
            <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
              {/* Logo */}
              <div className="block" to="/"></div>
            </div>
          </div>

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
        <img
          className="object-cover object-center w-full h-full"
          src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          width="760"
          height="1024"
          alt="Authentication"
        />
      </div>
    </div>
    </section>
  );
};
