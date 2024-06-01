import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <button className='btn' onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;



