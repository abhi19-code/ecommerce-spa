import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Login() {

  const { setIsLoggedIn } = useContext(CartContext);

  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
    navigate("/checkout");
  };

  return (
    <div className="container">

      <h1>Login</h1>

      <button onClick={login}>
        Login as Guest
      </button>

    </div>
  );
}

export default Login;