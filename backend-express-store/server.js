const express = require('express');
const cors = require('cors');
const products = require('./data');
const { addToCart, getCart } = require('./cart');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/products', (req, res) => res.json(products));

app.post('/cart', (req, res) => {
  const { id } = req.body;
  addToCart(id, products);
  res.json({ message: 'Producto agregado' });
});

app.get('/cart', (req, res) => res.json(getCart()));

app.listen(PORT, () => {
  console.log(`API funcionando en http://localhost:${PORT}`);
});
