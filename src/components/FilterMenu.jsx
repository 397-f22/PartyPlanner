import React, {useState} from "react";
import "../styles/FilterMenu.css";
import Filter from "./Filter.jsx";
import SortBar from "./SortBar.jsx";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


// const categories = ["Research", "Athletics and Recreation", "Technical", "Laboratory Work"]
// quarter = spring, winter, fall
// wage
// AVAILABILITY



const FilterMenu = ({
  allOptions,
  selectedOptions,
  setSelectedOptions,
  sortDirection,
  setSortDirection,
}) => {

  const [show, setShow] = useState(false)
  const handleOpen = () => {
    setShow(false)
  };
  const handleClose = () => {
    setShow(true)
  };
  
  function selectGroupSize(val) {
    setSelectedOptions({...selectedOptions, "Group Size": val})
  }

  function selectPriceLevel(val) {
    setSelectedOptions({...selectedOptions, "Price Level": val})
  }

  return (
    <div className="filter-menu">
      
      {/* <Button onClick={() => handleOpen()}  variant='contained'>Filters</Button>
                    <Modal
                    open={show}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    
                    // hideBackdrop = "true"
                    >
                    </Modal> */}
                    
      
      <div className="filter-container">
      
      {allOptions["Dietary Restrictions"].map((category) => (
        <Filter
          role="filter"
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
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
        {[...Array(allOptions["Group Size"][1]-allOptions["Group Size"][0]+1).keys()].map( i =>
            <MenuItem value={i+allOptions["Group Size"][0]} onClick={() => selectGroupSize(i+allOptions["Group Size"][0])}>{i+allOptions["Group Size"][0]}</MenuItem>
          )
        }
        </Select>
      </div>

      <div className="filter-container">
        <InputLabel id="priceLevelLabel">Price Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Price"
        >
        {allOptions["Price Level"].map( p =>
            <MenuItem value={p} onClick={() => selectPriceLevel(p)}>{p}</MenuItem>
          )
        }
        </Select>
      </div>
      
    </div>
  );
};

export default FilterMenu;
