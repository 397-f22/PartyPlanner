import React from 'react'
import Restaurant from './Restaurant.js'

const RestaurantList = ({ restaurants, filterCategories, sortDirection }) => {

  switch (sortDirection) {

    case "Alphabetical Order":
      restaurants.sort((a, b) => { return a.TITLE.substring(a.TITLE.indexOf(":")+1).localeCompare(b.TITLE.substring(b.TITLE.indexOf(":")+1)); });
      break;

    default:
      restaurants.sort((a, b) => { return a.TITLE.substring(a.TITLE.indexOf(":")+1).localeCompare(b.TITLE.substring(b.TITLE.indexOf(":")+1)); });
      break;
  }

  restaurants = restaurants.filter(rest => !rest.TITLE.includes("General Info"));

  return (
    <ul className="cards">
      {filterCategories.length === 0 ?
        Object.values(restaurants).map((rest) =>
          <Restaurant restaurant={rest} key={rest.ID} />) :
        restaurants.filter(rest => filterCategories.includes(rest.CATEGORY)).map((rest) =>
          <Restaurant restaurant={rest} key={rest.ID} />)
      }
    </ul>
  )
}

export default RestaurantList;
