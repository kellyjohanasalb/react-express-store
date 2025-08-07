let cart = [];

function addToCart(id, products) {
  const product = products.find(p => p.id === id);
  if (product) cart.push(product);
}

function getCart() {
  return cart;
}

module.exports = { addToCart, getCart };
