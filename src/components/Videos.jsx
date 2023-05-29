import React from 'react'
import { Stack,Box, Typography } from "@mui/material";
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
const Videos = ({videos ,selected , isloading,setisloading}) =>{
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
  return (
    <>
   {!isloading ?
(<Stack className='Scroll' direction="row" flexWrap="wrap"
 gap={2}
color="white"
sx={{
  justifyContent:'center',
  height:'90vh',
  overflowY:'auto',
  scrollBehavior:'smooth' 
}}>

  {
  videos.map((item,idx) =>(
     <Box key={idx} >
      
      {/* if item has a id and the id points to a video that means
       it is a video 'video' is the prop which we have to pass to VideoCard component 
       item is the main array of youtube video list*/}
      {item.id.videoId && <VideoCard video={item}/>}

      {/* if item has a id and the id points to channel that means
       it is a YtChannel 'ChannelDetail' is the prop which we have to pass to ChannelCard component */}
      {item.id.channelId && <ChannelCard ChannelDetail ={item}/>}
     </Box> 
    ))
  }
</Stack>):(<div className="Sclitems">
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
      </div>)}
</>
  )
}
export default Videos