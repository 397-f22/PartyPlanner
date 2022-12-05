import React, {useState} from "react";
import "../styles/FilterMenu.css";
import Filter from "./Filter.jsx";
import SortBar from "./SortBar.jsx";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { LocalizationProvider } from "@mui/x-date-pickers";

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
  handleClose
}) => {

  const [value, setValue] = React.useState(dayjs());

  const handleChange = (newValue) => {
    setValue(newValue);
    setSelectedOptions({...selectedOptions, "Time": Number(value.hour())})
    console.log(value)
  };


  const [show, setShow] = useState(false)
  const handleOpen = () => {
    setShow(false)
  };
  // const handleClose = () => {
  //   setShow(true)
  // };
  
  function selectGroupSize(val) {
    if (val == null || val == 0) {
      setSelectedOptions({...selectedOptions, "Group Size": null})  
    }
    else {
      setSelectedOptions({...selectedOptions, "Group Size": Number(val)})
    }
  }

  function selectPriceLevel(val) {
    setSelectedOptions({...selectedOptions, "Price Level": val})
  }

  //return the hour of time object from MUI date picker
  function getHour(value){
    let time = String(value["$d"]);
    let time_array = time.split(" ");
    let hour = time_array[4];
    return hour.split(":")[0];
  }

  return (
    <div className="filter-menu">
       <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}/>    
      {/* <Button onClick={() => handleOpen()}  variant='contained'>Filters</Button>
                    <Modal
                    open={show}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    
                    // hideBackdrop = "true"
                    >
                    </Modal> */}
               
  
      <div className="filter-container alter">
        {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Group"
        >
        {[...Array(allOptions["Group Size"][1]-allOptions["Group Size"][0]+1).keys()].map( i =>
            <MenuItem value={i+allOptions["Group Size"][0]} onClick={() => selectGroupSize(i+allOptions["Group Size"][0])}>{i+allOptions["Group Size"][0]}</MenuItem>
          )
        }
        </Select> */}
        <label id="groupSizeLabel" for="groupSize">Group Size:</label>
        <input
          id="groupSizeInput"
          type="number"
          name="groupSize"
          step="1"
          min={allOptions["Group Size"][0]}
          max={allOptions["Group Size"][1]}
          onChange={(e) => selectGroupSize(e.target.value)}
          value={selectedOptions["Group Size"]}
          required />
      </div>
      <div className="filter-container date-picker-container alter">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
          label="date and time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        
        
        </LocalizationProvider>
      </div>
      <div className="filter-container alter">
        <InputLabel id="priceLevelLabel">Price Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          data-testid="demo-simple-select"
          label="Price"
          role="listbox"
          native={true}
        >
        {allOptions["Price Level"].map( p => {
          console.log("Price Level")
          console.log(p)
          console.log(<MenuItem value={p} onClick={() => selectPriceLevel(p)} data-testid={p}>{p}</MenuItem>)
          return (
            <MenuItem value={p} onClick={() => selectPriceLevel(p)} data-testid={p}>{p}</MenuItem>
          )
        })
        }
        </Select>
      </div>
      <p className="label">Dietary Restrictions</p>
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
    </div>
  );
};

export default FilterMenu;
