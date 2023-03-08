import React from "react";

export const Cart = (props) => {
  const { items } = props;

  const totalPrice = items?.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      
      <h2>Récapitulatif du panier</h2>
      <ul>
        {items?.map(item => (
          <li key={item.id}>
            {item.name} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Prix total : {totalPrice ?? 0} €</p>
    </div>
  );
}