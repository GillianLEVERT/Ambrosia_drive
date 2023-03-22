import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useAtomValue } from "jotai";
import { cartItemsAtom } from "../../store/atom";
import { isAuthenticatedAtom } from "../../store/atom";

export const AddToCartButton = ({ product }) => {
  const [counter, setCounter] = useState(0);
  const cartItems = useAtomValue(cartItemsAtom);
  const [cartItem, setCartItem] = useState(null);
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);

  useEffect(() => {
    const cartItem =
      cartItems &&
      cartItems.find((cartItem) => cartItem.product_id === product.id);
    if (cartItem) {
      setCounter(cartItem.quantity);
      setCartItem(cartItem);
    }
  }, []);

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
        console.log(data);
        setCartItem(data)
        setCounter(1);
      })
      .catch((error) => console.log(error));
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
      .catch((error) => console.log(error));
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
        .catch((error) => console.log(error));
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
          console.log(data);
          setCounter(counter - 1);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      {isAuthenticated ? (
        counter < 1 ? (
          <button
            onClick={addToCart}
            className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-full sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Ajouter
          </button>
        ) : (
          <div className="flex gap-4 px-4 py-2 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-full sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
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
