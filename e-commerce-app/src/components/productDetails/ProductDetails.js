import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProductId } from "../../ApiService/api";
import "./ProductDetails.css";
function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProductId(id);
      setProduct(data);
    };

    fetchData();
  }, [id]);

  return (
    product && (
      <div className="product-details">
        <div className="image-container">
          <img className="image" src={product.image} alt="Sorry" />
        </div>
        <div className="details">
          <h1 className="title">{product.title}</h1>
          <p className="description">{product.description}</p>
          <h1 className="price">{product.price}</h1>
          {/* <p>Rating: {product.rating.rate}</p> */}
          <p>Category: {product.category}</p>
          <div className="button-container">
            <button className="buy-button">Buy Now</button>
            <button className="home-button">Go Back Home</button>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductDetails;
