import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      return JSON.parse(savedCart);
    }

    return [];
  });

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}