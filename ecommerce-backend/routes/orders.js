const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { firstName, lastName, address, cartItems } = req.body;

  if (!firstName || !lastName || !address) {
    return res.status(400).json({ message: 'First name, last name, and address are required' });
  }

  console.log('Order placed:', { firstName, lastName, address, cartItems });

  res.json({ message: `Thank you ${firstName}. Your order placed successfully` });
});

module.exports = router;
