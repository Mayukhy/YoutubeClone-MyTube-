import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
//By default, Stack arranges items vertically in a column. Use the direction prop to position items horizontally in a row
import {Stack, Typography  } from "@mui/material";//Use the spacing prop to control the space between children. The spacing value can be any number, including decimals, or a string
import Searchbar from './Searchbar';
import CustomizedSwitches from './CustomizedSwitches';
export default function Navber({mode,setmode}) {
   const [clicked ,setclicked] = useState('titlesim')
   const [logo,setlogo] = useState('logoo')
const hideText=()=>{
   setclicked('hide')
   setlogo('logoright')
}
const showText=()=>{
   setclicked('titlesim')
   setlogo('logoo')
}
    return(
 <Stack className='navstyle'
 direction= "row"
 alignItems="center"
 sx={{ position: "sticky",
       background : mode ? 'radial-gradient(circle, rgba(45,2,72,1) 0%, rgba(23,0,20,1) 100%)':'white' ,
       justifyContent: "space-between",
       height:'85px',
       width:'100%',
       overflowX:'hidden'
       
       
       }}
>
 <Link to ="/"
 style={{
    display : "flex",
    textDecoration : "none",
    marginLeft :'20px'
 }}>
 <img className={`${logo}`} onMouseEnter={hideText} onMouseLeave={showText}
  src="https://user-images.githubusercontent.com/52816917/61176033-e0c43a80-a5b9-11e9-8170-47d3207f96e9.png" alt="" />
<h5  className={`${clicked}`}>MyTube</h5>

 </Link>
 <span style={{
   display:'flex',
   justifyContent:'space-between'
   
 }}>
 <Searchbar/>
 <CustomizedSwitches 
 mode ={mode}
 setmode ={setmode}/>
 </span>
 </Stack>
    )
}
