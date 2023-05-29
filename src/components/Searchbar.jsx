import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
export default function Searchbar() {
    const [searchTerm,SetsearchTerm] = useState("")
    const navigate = useNavigate();
    const handelSubmit = (e) =>{
        e.preventDefault();
        if (searchTerm) {
            // it will redirect us to SearchFeed
            navigate(`/search/${searchTerm}`);
            SetsearchTerm("");
        }
    }

    return (
<div className='searchbarpos'>
        <Paper className='searchbackground'
            component='form'
            onSubmit={handelSubmit}
             sx={{
                borderRadius: 20,
                paddingRight :2,
                paddingLeft :1,
                mr: {sm:2},
                width:{xs:'270px', md:'auto'}
                
                
            }}>
            <IconButton sx={{
                color:"red"
            }}>
                <SearchIcon />
            </IconButton>
            <input placeholder='Search Here...' type="text" className='search' value={searchTerm} 
            onChange={(e)=>SetsearchTerm(e.target.value)}/>
        </Paper>
        </div>
    )
}
