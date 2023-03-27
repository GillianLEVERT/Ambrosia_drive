import React, { useEffect, useState } from "react";
import { CartItem } from "../../components/CartItem/CartItem";
import Cookies from "js-cookie";
import { useSetAtom, useAtom } from "jotai";
import { cartItemsAtom } from "../../store/atom";
import { CheckoutForm } from "../../components/Checkout/CheckoutForm";
import { totalPriceAtom } from "../../store/atom";
import { Link } from "react-router-dom";
import { GiFruitBowl } from "react-icons/gi";

export const Cart = () => {
  const setCartItemsAtom = useSetAtom(cartItemsAtom);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useAtom(totalPriceAtom);

  useEffect(() => {
    fetch(`https://ambrosiaserver.fly.dev/carts`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCartItemsAtom(data.cart_items);
        setCartItems(data.cart_items);
        setTotalPrice(data.total_price);
      })
      .catch((error) => console.error(error));
  }, []);

  if (totalPrice === 0) {
    return (
<section className="flex flex-col items-center justify-center h-screen">
  <h2 className="text-[#CD5555] text-3xl font-bold mb-4">Ton panier est vide</h2>
  <img src="https://media.giphy.com/media/8PA8Ew3nw97yg/giphy.gif" alt="Empty cart" className="mt-4" />    

      <div className=" text-center relative">
      <Link to="/shopping" className="mx-auto my-8 bg-[#CD5555] text-[#FCF4E9] py-2 px-4 rounded-full font-bold text-lg inline-block ">
        <span className="inline-block">  
           <GiFruitBowl className="inline-block mr-2 text-xl hover:rotate-45 hover:duration-300 hover:ease-in-out "/>Ajouter des produits 
        </span>
      </Link>
    </div>
    </section>
    );
  }


  return (
    <section className="px-6 sm:px-8 lg:px-16 py-4 sm:py-6 lg:py-8">
      <div className="h-screen flex flex-col gap-4">
        {cartItems.map((item) => (
          <CartItem cartItem={item.product} key={item.id} />
        ))}
        <p className="font-bold text-right text-[#CD5555] mr-2">
          Total du panier : {totalPrice.toFixed(2)}
        </p>
        <div className="flex justify-end">
          <div className="text-[#CD5555] hover:bg-[#CD5555] hover:text-white font-montserrat py-2 px-8 font-medium rounded-xl transition-all duration-300">
            {" "}
            <CheckoutForm />
          </div>
        </div>
      </div>
    </section>
  );
};
