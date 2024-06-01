import React from 'react';
import ProductCard from '../components/ProductCard.js';

const ProductListing = ({ products, addToCart }) => {
  return (
    <div className="product-listing">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductListing;


