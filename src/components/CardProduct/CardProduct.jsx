import React from "react";
import { AddToCartButton } from "../AddToCartButton/AddToCartButton";

export const CardProduct = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={product.img_url}
        alt=""
        className="w-full rounded-2xl aspect-square mb-2"
      />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h5 className="font-bold">{product.name}</h5>
          <p className="font-light">
            {product.volume}
            {product.volume_type}
          </p>
        </div>
        <div>
          <p className="text-sm font-light">Vendu par : {product.store.name}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold">{product.price} €</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};
