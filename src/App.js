
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';
import Navber from './components/Navber';
import { useState } from 'react';

const App = ()=> {
  const [mode, setmode] = useState(true)
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '' }}>
        <Navber mode ={mode}
        setmode ={setmode} />
        <Routes>
          <Route path='/' exact element={<Feed  mode ={mode}
 setmode ={setmode} />}></Route>
          <Route path='/video/:id' exact element={<VideoDetail/>}></Route>
          <Route path='/channel/:id' exact element={<ChannelDetail/>}></Route>
          <Route path='/search/:searchTerm' exact element={<SearchFeed
          mode ={mode}
          setmode={setmode}/>}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
