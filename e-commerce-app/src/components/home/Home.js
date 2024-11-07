import React, { useEffect, useState } from "react";
import "./Home.css";
import { getAllProducts } from "../../ApiService/api";
import { Link } from "react-router-dom";
function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="body">
      <div className="product-grid">
        {products.map((product) => {
          return (
            <div className="card" key={product.key}>
              <img src={product.image} alt="Image" key={product.key} />
              <h4 key={product.key}>{product.title}</h4>
              <p key={product.key}>
                <span className="price">Rs.{product.price}</span>
              </p>
              <Link className="link-no-decoration" to={`/product-details/${product.id}`}>
                {" "}
                <button className="details-button" key={product.key}>
                  Product Details
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
