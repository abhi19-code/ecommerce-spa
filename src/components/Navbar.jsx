import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>React Store</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/checkout">Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;