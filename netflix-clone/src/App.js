import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { originals, action, kdrama } from './urls'; 
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost title='Netflix Originals' isSmall = {false} url={originals}/>
      <RowPost title='Action' isSmall = {true} url={action}/>
      <RowPost title='K-Drama' isSmall = {true} url={kdrama}/>
    </div>
  );
}

export default App;
