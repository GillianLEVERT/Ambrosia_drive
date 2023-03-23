import React from "react";


export const Home = () => {
  return (
    <section className="h-screen bg-[url('./assets/images/background.jpg')] bg-no-repeat bg-cover">
      
        
      
      <div className="flex flex-row justify-center items-center lg:p-8 mb-10">
        <div className="bg-[#D8D0C2] h-64 lg:h-48 border rounded-xl overflow-hidden mt-8 w-48 lg:w-64 p-2 lg:p-6 ">
          <p className="text-justify lg:text-xl">
            Je remplis mon panier de produits des{" "}
            <span className="text-[#CD5555] font-bold">producteurs locaux.</span>
          </p>
        </div>
        <div className="bg-[#DAD0C2] h-64 lg:h-48 border rounded-xl overflow-hidden mt-8 w-48 lg:w-64 p-2 lg:p-6  mx-4 sm:mx-10 lg:mx-20">
          <p className="text-justify lg:text-xl">
            Je choisis{" "}
            <span className="text-[#CD5555] font-bold">le jour et l'heure</span> de
            retrait de mon panier.
          </p>
        </div>
        <div className="bg-[#D8D0C2] h-64 lg:h-48 border rounded-xl overflow-hidden  mt-8 w-48 lg:w-64 p-2 lg:p-6 ">
          <p className="text-justify lg:text-xl ">
            Je récupère ma commande{" "}
            <span className="text-[#CD5555] font-bold">en point de retrait.</span>
          </p>
        </div>
      </div>
     
    </section>
  );
};
