import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);

  return (
    <div className="container">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="products-grid">
          {cart.map((item, index) => (
            <div className="product-card" key={index}>
              <img
                src={item.thumbnail}
                alt={item.title}
              />

              <h3>{item.title}</h3>

              <p>${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;