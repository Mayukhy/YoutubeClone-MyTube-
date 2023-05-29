import React  from 'react'
import { Box,Stack,Typography } from "@mui/material";
import { Catagories } from '../Catagories';
export default function Sidebar({selected,setselected,mode,setmode}) { 
  return (
<Stack direction="row" className='Side_container'
sx={{
    overflowY:"auto",
    height : {xs : "auto",md:"95%"},
    flexDirection:{ xs :"row",md : "column"},
    marginTop:'10px'
}}
style={{
  
}}>
  {
    Catagories.map((catagory) =>(
        <button key={catagory.name} className='Catagory' style={{
            background: catagory.name === selected
            ? "#800000": 'none',
            color:"white", 
        }} onClick={()=>{
          setselected(catagory.name)
          }} >
            <span style={{
                color: catagory.name === selected ? "#faece3": "#f2873f"
            }}>{catagory.icon} </span>
            <span className='cata_name' style={{
                marginLeft: 10,
            }}>{ catagory.name }</span>
        </button>
    ))
  }

</Stack>
  )
}
