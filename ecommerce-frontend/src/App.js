import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductListing from './pages/ProductListing.js';
import Cart from './pages/Cart.js';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
  };

  const placeOrder = (orderDetails) => {
    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...orderDetails, cartItems })
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        setCartItems([]);
      })
      .catch((error) => console.error('Error placing order:', error));
  };

  return (
    <Router>
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </div>
      <Routes>
        <Route path="/" element={<ProductListing products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} placeOrder={placeOrder} />} />
      </Routes>
    </Router>
  );
};

export default App;
