import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-4">🛍️ Productos</h2>
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">${p.price}</p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => addToCart(p)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
