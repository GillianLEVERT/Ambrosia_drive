import React, { useEffect, useState } from "react";
import { CartItem } from "../../components/CartItem/CartItem";
import Cookies from "js-cookie";
import { useSetAtom, useAtom } from "jotai";
import { cartItemsAtom } from "../../store/atom";
import { CheckoutForm } from "../../components/Checkout/CheckoutForm";
import { totalPriceAtom } from "../../store/atom";

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

  return (
    <section className="px-6 sm:px-8 lg:px-16 py-4 sm:py-6 lg:py-8">
      <div className="h-screen flex flex-col gap-4">
        {cartItems.map((item) => (
          <CartItem cartItem={item.product} key={item.id} />
        ))}
        <p className="font-bold text-right text-[#CD5555] mr-2">
          Total du panier : {totalPrice}
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
