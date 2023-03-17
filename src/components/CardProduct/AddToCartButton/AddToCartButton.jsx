import React, { useState } from "react";
import Cookies from "js-cookie";

export const AddToCartButton = ({product}) => {
  const [counter, setCounter] = useState(0);

  const addToCart = () => {
    fetch(`http://localhost:3000/cart_items`, {
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
    fetch("http://localhost:3000/cart_items", {
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
    fetch("http://localhost:3000/cart_items/1", {
      method: "DELETE",

      headers: {
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
        <button onClick={addToCart}> Ajouter au panier</button>
      ) : (
        <>
          <button onClick={substractCounter}>-</button>
          <p>{counter}</p>
          <button onClick={incrementCounter}>+</button>
        </>
      )}
    </>
  );
};
