import React from "react";
import "../styles/FilterMenu.css";
import Filter from "./Filter.jsx";
import SortBar from "./SortBar.jsx";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


// const categories = ["Research", "Athletics and Recreation", "Technical", "Laboratory Work"]
// quarter = spring, winter, fall
// wage
// AVAILABILITY

const FilterMenu = ({
  restaurantCategories,
  filterCategories,
  setFilterCategories,
  sortDirection,
  setSortDirection,
}) => {
  restaurantCategories.sort();
  

  return (
    <div className="filter-menu">
      <h2>Dietary Restrictions</h2>
      <div className="filter-container">
      {restaurantCategories.map((category) => (
        <Filter
          role="filter"
          filterCategories={filterCategories}
          setFilterCategories={setFilterCategories}
          value={category}
          key={category}
          dataTestID={`filterby-${category}`}
        />
      ))}
      {/* <div className="sort-bar">
        <SortBar
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
        />
      </div> */}
      
        </div> 
      <div className="filter-container">
        <InputLabel id="groupSizeLabel">Group Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Group"
        >
        {[...Array(16).keys()].map( i =>
            <MenuItem value={i+5}>{i+5}</MenuItem>
          )
        }
        </Select>
      </div>
      
    </div>
  );
};

export default FilterMenu;
