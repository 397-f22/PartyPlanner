
import React, { useState } from 'react';
import '../styles/Restaurant.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ButtonBase from '@mui/material/ButtonBase';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};

const menuButtonStyle = {
    marginTop: "10px",
    marginRight: "40px",
    backgroundColor: "#d8a47f",
    color: "black",
    border: "1px solid #d8a47f",
    height: "38.5px",
    width: "102.5px",
  }
    const Restaurant = ({ restaurant }) => {

    const openLink = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    console.log(restaurant.NUMBER)
    return (
        <div className='container-fluid' data-testid='restaurant'>
            <div className="card" data-testid={`restaurant-${restaurant.TITLE.substring(restaurant.TITLE.indexOf(":") + 1)}`}>
                <div className="card-top">
                    <div className="card-title"> {restaurant.TITLE.substring(restaurant.TITLE.indexOf(":") + 1)}
                    </div>
                    <div className="view-menu">
                        <Button sx={menuButtonStyle} onClick={() => openLink(restaurant.URL)}>View Menu</Button>
                        <ButtonBase sx={{boxShadow: 0, cursor: "default"}} disableElevation disableRipple disableFocusRipple onClick={() => openLink("tel:" + restaurant.NUMBER)}><span id="call-button" class="material-symbols-outlined">
                            smartphone
                        </span></ButtonBase>
                    </div>
                </div>

                <div className="card-category">
                    {restaurant.CUSINE}
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className='card-text col-sm'> {restaurant["PRICE"][0]} </div>
                        <div className='card-text col-sm'> {restaurant["AVAILABILITY"]} </div>
                        <div className='card-text col-sm'> {restaurant.LOCATION} </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Restaurant