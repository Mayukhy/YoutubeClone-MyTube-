import React  from 'react'
import './searchFeed.scss'
import { useState,useEffect } from "react";
import { Box,Stack,Typography } from "@mui/material";
import Videos from './Videos';
import { fetchFromApi } from './Utilities/fetchFromApi';
import { useParams } from 'react-router-dom';
const SearchFeed =({mode,setmode})=> {
  const skItem =()=>{
    return(
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="Detail">
          <div className="Title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    )
  }
  const [isloading,setisloading] = useState(true)
  const [videos ,setvideos] = useState([]);
  const {searchTerm} = useParams();
  useEffect(() =>{
    setisloading(true)
  fetchFromApi(`search?part=snippet&q=${searchTerm}`)
  .then((data) =>
  { setisloading(false)
    setvideos(data.items)}) 
 
   //Fetch The Requests
  },[searchTerm]);

  return (
  <Stack sx={{flexDirection : { xs:"column" , md: "row"}
}}
style={{
  background: mode?'#100224':'#d9edfa'
}}>
   
  <Box>
    <Typography variant='h4' style={{
      marginLeft :"120px",
      marginTop :'20px',
      marginBottom:0,
      color: "#faede3",
      fontWeight:"bold"
    }} sx={{
       height: "70px", flex: 2,
       paddingBottom:'20px'
       
    }}>
    Search Results For : <span> </span>
     <span>" {searchTerm} "</span>
     <span style={{
      marginLeft :"10px",
      color: "#fc6f03"
     }}>Videos</span>
    </Typography>
    {!isloading?(
          <Videos videos ={videos}
          mode={mode}
          setmode={setmode}
           isloading = {isloading}/>
      ):(
        <div className="sclitems">
        <div className="loadingSkeleton">
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
        
      </div>
      <div className="loadingSkeleton">
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}
      </div>
      <div className="loadingSkeleton">
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}

      </div>
      <div className="loadingSkeleton">
        {skItem()}
        {skItem()}
        {skItem()}
        {skItem()}

      </div>
      </div>
      ) }

  </Box>
    
  </Stack>
  )
}
export default SearchFeed

