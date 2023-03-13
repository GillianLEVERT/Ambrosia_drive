import React from "react";
import "./CardProduct.css";

export const CardProduct = ({ product }) => {
  return (
    <div>
      <div className="card" key={product.id}>
        <div className="card-body">
          <img src={product.img_url} alt="" />
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            {product.volume}
            {product.volume_type}
          </p>
          <p>{product.store_shelf}</p>
        </div>
      </div>
    </div>
  );
};
