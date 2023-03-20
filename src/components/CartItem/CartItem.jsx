import React from "react";
import { AddToCartButton } from "../AddToCartButton/AddToCartButton";

export const CartItem = (cartItem) => {
  const item = cartItem.cartItem;

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={item.img_url}
          alt=""
          srcset=""
          className="aspect-square rounded-2xl h-16 mr-4"
        />
        <p className="font-bold">{item.name}</p>
      </div>
      <div className="flex items-center gap-4">
        <p>{item.price} €</p>
        <div>
        <AddToCartButton product={item} />
      </div>
      </div>
    
    </div>
  );
};
