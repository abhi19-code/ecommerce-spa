import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log("Error:", error);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="container">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="container product-details">
      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <div className="details">
        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <h2>${product.price}</h2>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>
          <strong>Brand:</strong> {product.brand}
        </p>

        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;