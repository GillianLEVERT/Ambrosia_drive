import React, { useEffect, useState } from "react";
import { CartItem } from "../../components/CartItem/CartItem";
import Cookies from "js-cookie";
import { useSetAtom } from "jotai";
import { cartItemsAtom } from "../../store/atom";
import { CheckoutForm } from "../../components/Checkout/CheckoutForm";

export const Cart = () => {
  const setCartItemsAtom = useSetAtom(cartItemsAtom);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch(`https://ambrosia-drive-git-development-gillianlevert.vercel.app/carts`, {
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
    <div className="flex flex-col gap-4">
      {cartItems.map((item) => (
        <CartItem cartItem={item.product} key={item.id} />
      ))}
      <p>{totalPrice}</p>
    <CheckoutForm />
    </div>
  );
};
