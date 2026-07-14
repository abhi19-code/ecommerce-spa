import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to React Store</h1>

      <p>
        Browse products and add them to your shopping cart.
      </p>

      <br />

      <Link to="/shop">
        <button>Go to Shop</button>
      </Link>
    </div>
  );
}

export default Home;