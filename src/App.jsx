import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RestaurantCard from './components/RestaurantCard';

const App = () => {

  return (
    <div className="App">
      <RestaurantCard />
    </div>
  );
};

export default App;
