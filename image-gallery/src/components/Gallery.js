import React, { useState, useEffect } from "react";
import "./Gallery.css";
import Card from "./Card";
function Gallery() {
  const importAllImages = (requireContext) => {
    return requireContext.keys().map(requireContext);
  };
  const [imageSource, setImageSource] = useState([]);

  useEffect(() => {
    const images = importAllImages(
      require.context("../assets/images/cards", false, /\.(png|jpe?g|svg)$/)
    );

    setImageSource(images);
  }, []);

  const handleDelete = (key) => {
    const updatedImages = imageSource.filter((_, index) => index !== key);
    setImageSource(updatedImages);
  };
  return (
    <div className="Gallery">
      <h2>Image Gallery App</h2>
      <div>
        {imageSource.length === 0 ? (
          <h4>No Images</h4>
        ) : (
          <div className="content">
            {imageSource.map((src, index) => (
              <Card src={src} index={index} key={index} handleDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
