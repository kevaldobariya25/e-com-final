const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

const productsRoute = require('./routes/products');
const ordersRoute = require('./routes/orders');

app.use(cors());
app.use(bodyParser.json());

app.use('/products', productsRoute);
app.use('/orders', ordersRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

