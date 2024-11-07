import React from "react";
import homeImage from "../images/pexels-sebastians-731082.jpg"

function Home() {
  return (
    <div style={{width:'1000px'}}>
      <h1 className="heading">Home</h1>
      <img src={homeImage} alt="Home" style={{ width: '1000px', height: 'auto' }} onContextMenu={(e)=>e.preventDefault()}/>
    </div>
  );
}

export default Home;
