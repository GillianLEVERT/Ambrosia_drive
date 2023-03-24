import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useAtomValue } from "jotai";
import { cartItemsAtom } from "../../store/atom";
import { isAuthenticatedAtom } from "../../store/atom";
import { useSetAtom } from "jotai";
import { totalPriceAtom } from "../../store/atom";

export const AddToCartButton = ({ product }) => {
  const [counter, setCounter] = useState(0);
  const cartItems = useAtomValue(cartItemsAtom);
  const [cartItem, setCartItem] = useState(null);
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const setTotalPrice = useSetAtom(totalPriceAtom);

  useEffect(() => {
    const item =
      cartItems && cartItems.find((c) => c.product_id === product.id);
    if (item) {
      setCounter(item.quantity);
      setCartItem(item);
    }
  }, [cartItems]);

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
        setTotalPrice(data.total_price);
      })
      .catch((error) => console.error(error));
  }, [counter]);

  const addToCart = () => {
    fetch(`https://ambrosiaserver.fly.dev/cart_items`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("token"),
      },

      body: JSON.stringify({
        cart_item: {
          product_id: product.id,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCartItem(data);
        setCounter(1);
      })
      .catch((error) => console.error(error));
  };

  const incrementCounter = () => {
    const newQuantity = counter + 1;
    fetch(`https://ambrosiaserver.fly.dev/cart_items/${cartItem.id}`, {
      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("token"),
      },

      body: JSON.stringify({
        cart_item: {
          quantity: newQuantity,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCounter(counter + 1);
      })
      .catch((error) => console.error(error));
  };

  const substractCounter = () => {
    const newQuantity = counter - 1;
    if (newQuantity === 0) {
      fetch(`https://ambrosiaserver.fly.dev/cart_items/${cartItem.id}`, {
        method: "DELETE",

        headers: {
          "Content-Type": "application/json",
          Authorization: Cookies.get("token"),
        },
      })
        .then(() => {
          setCounter(0);
        })
        .catch((error) => console.error(error));
    } else {
      fetch(`https://ambrosiaserver.fly.dev/cart_items/${cartItem.id}`, {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
          Authorization: Cookies.get("token"),
        },

        body: JSON.stringify({
          cart_item: {
            quantity: newQuantity,
          },
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setCounter(counter - 1);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <>
      {isAuthenticated ? (
        counter < 1 ? (
          <button
            onClick={addToCart}
            className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#CD5555] rounded-full sm:mx-2 hover:bg-[#CD5555] focus:outline-none focus:bg-[#CD5555]"
          >
            Ajouter
          </button>
        ) : (
          <div className="flex gap-4 px-4 py-2 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#CD5555] rounded-full sm:mx-2 hover:bg-[#CD5555] focus:outline-none focus:bg-[#CD5555]">
            <button onClick={substractCounter}>-</button>
            <p>{counter}</p>
            <button onClick={incrementCounter}>+</button>
          </div>
        )
      ) : (
        <p></p>
      )}
    </>
  );
};
