import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Login() {
  const { setIsLoggedIn } = useContext(CartContext);

  const navigate = useNavigate();

  function handleLogin() {
    setIsLoggedIn(true);
    navigate("/checkout");
  }

  return (
    <div className="container">
      <h1>Guest Login</h1>

      <p>
        Click the button below to continue as a guest.
      </p>

      <button onClick={handleLogin}>
        Login as Guest
      </button>
    </div>
  );
}

export default Login;