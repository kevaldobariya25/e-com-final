import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>₹{item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
};

export default CartItem;

