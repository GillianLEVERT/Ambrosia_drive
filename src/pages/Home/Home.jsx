import React from "react";
import { Link } from "react-router-dom";
import { GiFruitBowl } from "react-icons/gi";

export const Home = () => {
  return (
    <section className="h-screen bg-[url('./assets/images/background.jpg')] bg-no-repeat bg-cover">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-[0]"></div>
      <div className="flex flex-row justify-center items-center lg:p-8 mb-10">
        <div className="bg-[#FCF4E9] h-64 lg:h-48 border rounded-xl overflow-hidden mt-8 w-48 lg:w-64 p-2 lg:p-6 relative  hover:bg-[#e6d5d5]  hover:duration-500 hover:ease-in-out">
          <div className="object-cover text-center bg-[#CD5555] border-black border-2 rounded-full w-8 h-8 overflow-hidden mx-auto font-bold text-lg mb-2 hover:rotate-45 hover:duration-300 hover:ease-in-out">1</div>
          <p className="text-justify lg:text-xl">
            Je remplis mon panier de produits des{" "}
            <span className="text-[#CD5555] font-bold">
              producteurs locaux.
            </span>
          </p>
        </div>
        <div className="bg-[#FCF4E9] h-64 lg:h-48 border rounded-xl overflow-hidden mt-8 w-48 lg:w-64 p-2 lg:p-6 mx-4 sm:mx-10 lg:mx-20 z-[1]  hover:bg-[#e6d5d5]  hover:duration-500 hover:ease-in-out">
          <div className="object-cover text-center bg-[#CD5555] border-black border-2 rounded-full w-8 h-8 overflow-hidden mx-auto font-bold text-lg mb-2 hover:rotate-45 hover:duration-300 hover:ease-in-out">2</div>
          <p className="text-justify lg:text-xl">
            Je choisis{" "}
            <span className="text-[#CD5555] font-bold">le jour et l'heure</span>{" "}
            de retrait de mon panier.
          </p>
        </div>
        <div className="bg-[#FCF4E9] h-64 lg:h-48 border rounded-xl overflow-hidden  mt-8 w-48 lg:w-64 p-2 lg:p-6 z-[1] hover:bg-[#e6d5d5]  hover:duration-500 hover:ease-in-out">
          <div className="object-cover text-center bg-[#CD5555] border-black border-2 rounded-full w-8 h-8 overflow-hidden mx-auto font-bold text-lg mb-2 hover:rotate-45 hover:duration-300 hover:ease-in-out">3</div>
          <p className="text-justify lg:text-xl ">
            Je récupère ma commande{" "}
            <span className="text-[#CD5555] font-bold">
              en point de retrait.
            </span>
          </p>
        </div> 
      </div> 
      <div className="z-[1] text-center relative">
  <Link to="/shopping" className="mx-auto my-8 bg-[#FCF4E9] text-[#CD5555] py-2 px-4 rounded-full font-bold text-lg inline-block ">
    <span className="inline-block">  
       <GiFruitBowl className="inline-block mr-2 text-xl hover:rotate-45 hover:duration-300 hover:ease-in-out "/>Voir les produits 
    </span>
  </Link>
</div>
    </section>
  );
};
