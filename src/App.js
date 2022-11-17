import "./App.css";
import React, { useState } from "react";
import RestaurantList from "./components/RestaurantList.js";
import FilterMenu from "./components/FilterMenu.js";
import NavBar from "./components/NavBar.js";
import SortBar from "./components/SortBar";
import RestaurantData from "./Restaurants.json";

import { useData } from "./utilities/firebase.js";
import "bootstrap/dist/css/bootstrap.min.css";



const App = () => {
  // const [sortWage, setSortWage] = useState("")
  const [sortDirection, setSortDirection] = useState("");
  const [filterCategories, setFilterCategories] = useState([]);
  //const [RestaurantData, loading, error] = useData("/");

  //if (error) return <h1>{error}</h1>;
  //if (loading) return <h1>Loading your restaurants...</h1>;

  const restaurantCategories = Array.from(
    new Set(
      Object.values(RestaurantData).map((rest) => {
        return rest.CATEGORY;
      })
    )
  );

  return (
    <div className="app-body">
      <NavBar />
      <div className="container">
        <div className="filters-and-restaurants">
          <div className="filters-list">
            <FilterMenu
              restaurantCategories={restaurantCategories}
              filterCategories={filterCategories}
              setFilterCategories={setFilterCategories}
              sortDirection={sortDirection}
              setSortDirection={setSortDirection}
            />
          </div>
          <div className="cards-list">
            <RestaurantList
              restaurants={RestaurantData}
              filterCategories={filterCategories}
              sortDirection={sortDirection}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
