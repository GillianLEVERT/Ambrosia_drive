import React from "react";

export const CartItem = (cartItem) => {
  
  const item = cartItem.cartItem

  return (
    <>
      <p>{item.name}</p>
    </>
  );
}