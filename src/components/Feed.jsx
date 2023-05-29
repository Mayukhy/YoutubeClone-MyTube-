import React  from 'react'
import { useState,useEffect } from "react";
import { Box,Stack,Typography } from "@mui/material";
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromApi } from './Utilities/fetchFromApi';
import ReactDOM from "react-dom";
import { Style } from '@mui/icons-material';
const Feed =({mode,setmode})=> {
  const [isloading,setisloading] = useState(null);
  const [selected , setselected] = useState("New");
  const [videos ,setvideos] = useState([]);

  //For imidiately fetch the data after page is loading
  useEffect(() =>{
    setisloading(true);
  fetchFromApi(`search?part=snippet&q=${selected}`)
  .then((data) =>{
    setisloading(false)
    setvideos(data.items)
  }
) 
   //Fetch The Requests
  },[selected]);

  return (
  <Stack  sx={{flexDirection : { xs:"column" , md: "row"}
}}
style={{
  background: mode?'#100224':'#d9edfa'
}}>
   
    {/* Inside The Box The Sidebar Components Are Come */}
  <Box sx={{
    height: {
      md: '100vh',
      xs:'auto'
    },
borderRight:"1px solid white",
px: { xs:0,md:2}

  }}>
    <Sidebar selected = {selected} 
             setselected= {setselected}
             mode={mode}
             setmode={setmode}/>
    <Typography variant='body2' sx ={{
    mt:1.5,color: "#fcacc9",
    justifyContent:'center' ,
    justifyItems:'center',
    alignItems:'center'
    }}>
    @GammingBuddy
    </Typography>
  </Box>
  <Box>
    <Typography variant='h4' style={{
      marginLeft :"40px",
      marginTop :'20px',
      marginBottom:0,
      color: "#faede3",
      fontWeight:"bold"
    }} sx={{
      overflowY: "auto", height: "70px", flex: 2
    }}>
     <span>{selected}</span>
     <span style={{
      marginLeft :"10px",
      color: "#fc6f03"
     }}>Videos</span>
    </Typography>
    <Videos videos ={videos}
      mode={mode}
      setmode={setmode}
       isloading = {isloading}
       setisloading={setisloading}
       selected={selected}/>
  </Box>
    
  </Stack>
  )
}
export default Feed
