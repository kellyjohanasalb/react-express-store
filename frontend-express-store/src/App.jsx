import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import { findBestCombination } from "./components/BestCombination";

function App() {
  const [products, setProducts] = useState([]);
  const [bestCombo, setBestCombo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const handleCalculate = () => {
    const combo = findBestCombination(products, 150);
    setBestCombo(combo);
  };

  return (
    <CartProvider>
      <div className="container my-5">
        <h1 className="text-center mb-4">🛒 Carrito de Compras</h1>
        <ProductList />
        <Cart />

        <div className="my-5 text-center">
          <button className="btn btn-success btn-lg" onClick={handleCalculate}>
            Calcular mejor combinación
          </button>
        </div>

        <div className="container">
          <h3>💡 Mejor combinación dentro del presupuesto ($150):</h3>
          {bestCombo.length === 0 ? (
            <p className="text-muted">No hay combinación seleccionada.</p>
          ) : (
            <ul className="list-group">
              {bestCombo.map((p) => (
                <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
                  {p.name}
                  <span className="badge bg-info text-dark">${p.price}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
