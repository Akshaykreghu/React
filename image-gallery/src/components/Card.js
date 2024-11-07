import React from "react";
function Card({ src, index, handleDelete }) {
  return (
    <div className="card">
      <div className="image-container">
        {" "}
        <img src={src} alt="Img not found" />
      </div>
      <div className="footer">
        <span>Image{" " + (index + 1)}</span>
        <button className="danger-button" onClick={() => handleDelete(index)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
