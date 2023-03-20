import React, { useState } from "react";
import Cookies from "js-cookie";

export const AddToCartButton = ({product}) => {
  const [counter, setCounter] = useState(0);

  const addToCart = () => {
    fetch(`https://ambrosiaserver.fly.dev/cart_items`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "Authorization": Cookies.get('token')
      },

      body: JSON.stringify({
        "cart_item": {
          "product_id": product.id
        }
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCounter(1)
      }
    )
      .catch((error) => console.log(error));
  };

  const incrementCounter = () => {
    fetch(`https://ambrosiaserver.fly.dev/cart_items`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "Authorization": Cookies.get('token')
      },

      body: JSON.stringify({
        "cart_item": {
          "product_id": product.id
        }
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCounter(counter + 1);
      }
    )
      .catch((error) => console.log(error));
  };

  const substractCounter = () => {
    fetch(`https://ambrosiaserver.fly.dev/cart_items/1`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "Authorization": Cookies.get('token')
      },
      body: JSON.stringify({
        "cart_item": {
          "product_id": product.id
        }
      }),
    })
      .then(() => {
        setCounter(counter - 1);
      }
    )
      .catch((error) => console.log(error));
  };

  return (
    <>
      {counter < 1 ? (
        <button onClick={addToCart} className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-full sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Ajouter</button>
      ) : (
        <div className="flex gap-4 px-4 py-2 text-sm font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-full sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          <button onClick={substractCounter}>-</button>
          <p>{counter}</p>
          <button onClick={incrementCounter}>+</button>
        </div>
      )}
    </>
  );
};
