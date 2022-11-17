// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import '../styles/RestaurantCard.css';
// import {useState} from 'react';
// import {ThemeProvider } from '@mui/material/styles';
// import {headerTheme} from '../styles/Themes';
// import Button from '@mui/material/Button';
// import '../index.css';
// import EditIcon from '@mui/icons-material/Edit';

// const RestaurantCard = () => (
//     <div className="card-container">
//         <Card variant="outlined" className="cardChecked" sx={{width:1, borderRadius: "15px", minHeight: '20%', maxHeight: '20%', margin: '0.2vw', fontFamily: 'Ubuntu'}}>
//             <CardContent className="cardChecked">
//                 <div className="card-content-checkbox">
//                     <div className='label-container'>
//                         <input type="checkbox" id="checkbox" name="vehicle1"></input>
//                         <label className="assign"><Typography sx={{ fontSize: '4vw', flexGrow: 1, fontFamily: 'Ubuntu' }} className={checked ? "done1" : "not-done1"} gutterBottom>
//                                 {assignedTo}
//                             </Typography></label>
//                     </div>
//                     <ThemeProvider theme={headerTheme}>
//                         <div className='task-wrapper'>
//                             <div className='titleEdit'>
//                             <Typography variant="h5" sx = {{fontSize: '5vw', flexGrow: 1, fontFamily: 'Ubuntu'}} component="div" className={checked ? "done1" : "not-done1"}>
//                                 {title}
//                             </Typography>
//                             <EditIcon id="editButton" onClick={() => {setEditingCard(id); setShow(true)}} />
//                             </div>
//                             <Typography sx={{ fontSize: 16, flexGrow: 1, fontFamily: 'Ubuntu'}} gutterBottom className={checked ? "done2" : "not-done2"}>
//                                 {due}
//                             </Typography>
//                         </div>
//                         <Button sx={buttonSwitch(checked)} size="small" onClick={(evt) => remove()} variant='contained'>Remove</Button>
//                     </ThemeProvider>
//                 </div>
//             </CardContent>
//         </Card>
//     </div>  
// )

// export default RestaurantCard;