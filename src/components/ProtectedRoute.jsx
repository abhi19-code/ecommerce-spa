import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProtectedRoute({ children }) {

  const { isLoggedIn } = useContext(CartContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;