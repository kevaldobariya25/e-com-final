const express = require('express');
const router = express.Router();

const products = [
  { id: 1, name: 'Product 1', description: 'Description for product 1', price: 100, image: 'https://picsum.photos/150/150' },
  { id: 2, name: 'Product 2', description: 'Description for product 2', price: 150, image: 'https://picsum.photos/150/150?grayscale' },
  // Add more products as needed
];

router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
