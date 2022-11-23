import React from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filter/AllCategories';

function App() {
  return (
    <div className="container">
    <div className="heading">
        <h1>Candy Bar</h1>
    </div>
    <div className="App">
      <div className='one'>
        <Dishes/>
      </div>
      <div className='block'>
        <AllCategories/>
        <Cart/>
      </div>      
    </div>
    </div>
  );
}

export default App;
