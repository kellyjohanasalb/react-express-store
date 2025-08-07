import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div className="container my-4">
      <h2 className="mb-3">🛒 Carrito</h2>
      {cart.length === 0 ? (
        <p className="text-muted">Tu carrito está vacío.</p>
      ) : (
        <ul className="list-group">
          {cart.map((p, i) => (
            <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
              {p.name}
              <span className="badge bg-secondary">${p.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
