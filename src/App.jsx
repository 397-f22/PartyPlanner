import "./App.css";
import React, { useState } from "react";
import RestaurantList from "./components/RestaurantList.jsx";
import FilterMenu from "./components/FilterMenu.jsx";
import NavBar from "./components/NavBar.jsx";
import SortBar from "./components/SortBar";
import RestaurantData from "./Restaurants.json";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Modal';
//import { useData } from "./utilities/firebase.js";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterIcon from "./pics/filter.png";



const App = () => {
  // const [sortWage, setSortWage] = useState("")
  const [sortDirection, setSortDirection] = useState("");
  const [selectedOptions, setSelectedOptions] = useState({"Dietary Restrictions": [], "Group Size": null, "Price Level": null});
  //const [RestaurantData, loading, error] = useData("/");

  //if (error) return <h1>{error}</h1>;
  //if (loading) return <h1>Loading your restaurants...</h1>;
  
  // SAVE ALL POSSIBLE FILTERING CATEGORIES IN ONE VARIABLE
  let allOptions = {}
  // Get all dietary restriction categories
  let dietaryRestrictions = []
  Object.values(RestaurantData).map((rest) => {
      rest.CATEGORY.map(cat => dietaryRestrictions.push(cat));
    })
  dietaryRestrictions = new Array(...new Set(dietaryRestrictions));
  // Get all group size options
  let groupSize = [5,20]
  // Get all price level options
  let priceLevels = []
  Object.values(RestaurantData).map((rest) => {
    priceLevels.push(rest.PRICE[0]);
  })
  priceLevels = new Array(...new Set(priceLevels));
  console.log(priceLevels);
  // Add all filtering options into allFilterCategories
  allOptions["Dietary Restrictions"] = dietaryRestrictions.sort();
  allOptions["Group Size"] = groupSize;
  allOptions["Price Level"] = priceLevels.sort();
  const [show,setShow] = useState(false)
  const handleOpen = () => {
    setShow(true)
  };
  const handleClose = () => {
    setShow(false)
  };
  const filterButtonStyle = {
    marginLeft: "12px",
    marginTop: "15px",
    backgroundColor: "#d8a47f",
    color: "black",
    border: "1px solid #d8a47f",
  }
 
  return (
    <div className="app-body">
      <NavBar />
      <div className="container">
        <div className="filters-and-restaurants">
          <div className="filters-list">
          
          <Button sx={filterButtonStyle} onClick={handleOpen} startIcon={<img style={{width: "20p", height: "20px", display:"block" }} src={FilterIcon}></img>} >Filter Options</Button>

          <Modal
            open={show}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            {/* <Box sx={style}>
              <div>test</div>
            </Box> */}
            <FilterMenu
              allOptions={allOptions}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
              sortDirection={sortDirection}
              setSortDirection={setSortDirection}
            />
          </Modal>
          </div>
          <div className="cards-list">
            <RestaurantList
              restaurants={RestaurantData}
              selectedOptions={selectedOptions}
              sortDirection={sortDirection}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
