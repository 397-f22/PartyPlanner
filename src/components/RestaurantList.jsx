import React from 'react'
import Restaurant from './Restaurant.jsx'

const RestaurantList = ({ restaurants, selectedOptions, sortDirection }) => {

  switch (sortDirection) {

    case "Alphabetical Order":
      restaurants.sort((a, b) => { return a.TITLE.substring(a.TITLE.indexOf(":")+1).localeCompare(b.TITLE.substring(b.TITLE.indexOf(":")+1)); });
      break;

    default:
      restaurants.sort((a, b) => { return a.TITLE.substring(a.TITLE.indexOf(":")+1).localeCompare(b.TITLE.substring(b.TITLE.indexOf(":")+1)); });
      break;
  }

  restaurants = restaurants.filter(rest => !rest.TITLE.includes("General Info"));
  // console.log(filterCategories)

  function filterRestaurants(){
    console.log(restaurants[1].TITLE)
    console.log(restaurants[1].CAPACITY[selectedOptions["Time"]])
    let filteredRestaurants = restaurants;
    if (selectedOptions["Dietary Restrictions"] != []){
      filteredRestaurants = filteredRestaurants.filter(rest => selectedOptions["Dietary Restrictions"].every(cat => rest.CATEGORY.includes(cat)));
    }
    if (selectedOptions["Group Size"] != null){
      filteredRestaurants = filteredRestaurants.filter(rest => rest.CAPACITY[selectedOptions["Time"]] >= selectedOptions["Group Size"])
    }
    if (selectedOptions["Price Level"] != null){
      filteredRestaurants = filteredRestaurants.filter(rest => rest.PRICE[0].length <= selectedOptions["Price Level"].length)
    }
    // console.log(filteredRestaurants)
    return filteredRestaurants;
  }

  return (
    <ul className="cards">
      {Object.values(filterRestaurants()).map((rest) =>
          <Restaurant restaurant={rest} key={rest.ID} />)}
    </ul>
  )
}

export default RestaurantList;
