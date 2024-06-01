import React, { useState } from 'react';
import CartItem from '../components/CartItem.js';

const Cart = ({ cartItems, placeOrder }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    placeOrder(formData);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="total">
            <p>Total: ₹{totalPrice.toFixed(2)}</p>
          </div>
          <form onSubmit={handleSubmit} className="order-form">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <button className="btn" type="submit">Place Order</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Cart;




