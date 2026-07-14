import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {

  const { cart } = useContext(CartContext);

  return (
    <div className="container">

      <h1>Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <hr />
          </div>
        ))
      )}

    </div>
  );
}

export default Checkout;