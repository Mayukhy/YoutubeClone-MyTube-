import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom";
import { Typography,Card,CardContent,CardMedia, Stack, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoChannelTitle,demoVideoUrl,demoVideoTitle,demoThumbnailUrl,demoChannelUrl } from "../Catagories";
import ReactPlayer from 'react-player'
// destructureing the video data which is come from the ytApi
const  VideoCard =({video:{id:{videoId},snippet}}) => {
  const [preview,setpreview] = useState(null)
  const videopreview =useRef()
  const showvideo =()=>{
  setpreview(videoId)
  // videopreview.current.play()
  }
  const hidevideo=()=>{
    // videopreview.current.pause()
  setpreview(null)
  }
    console.log(videoId,snippet);
  return (
    // <Stack className='Videos' sx={{
    // flexDirection :{ md:'row', xs:'column'},
    // margin:'20px 30px',

    // }}>
<Card onMouseEnter={showvideo} onMouseLeave={hidevideo} className='Video' sx={{
   margin: '20px 2px',
   borderRadius:{ xs:'10px 10px 5px 5px', md:'10px'},
   width :{sx:'90vw',sm :'470px', md:'400px'}
  
}}> 
    <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
    <CardMedia className='thumbnail' 
    image={snippet?.thumbnails?.high?.url
    }
    alt = {snippet?.title}
    sx={{
        width : {md :'400px', xs:'450px',sm:'500px'},
        height: '200px',
        
    }}
    />
    </Link>
    <Box  sx={{
        margin: '20px 2px',
        borderRadius:{ xs:'10px 10px 5px 5px', md:'10px'},
        width :{sx:'100%',sm :'470px', md:'400px'} 
    }} className={preview === videoId?"videohover":'videohover1'}>
    <ReactPlayer ref={videopreview} style={{
    width : {md :'400px', xs:'450px',sm:'500px'},
      top:'0'
    }} url={`https://www.youtube.com/watch?v=${preview}`
  } className="react1-player" playing={true} muted />
    </Box>
    <CardContent className='vidcardbackground' sx={{
       height:{ md:'85px', xs:'35px'},  
    }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }
            style={{
              textDecoration:'none',
            }} >
        <Typography  className='Subtitles' variant="subtitle1" fontWeight="bold" color="#FFF"
        sx={{
          textDecoration: 'none',
          marginTop:{ md: '8px', xs: '3px'},
          fontSize:{xs:'12px', md:'16px'}
          
        }}>
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} 
                  style={{
                    textDecoration:'none'
                  }}>
        <Typography sx={{
          fontSize:{xs:'11px', md:'15px'}
        }} variant="subtitle2" color="gray" className='Subtitle2'>
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
        
    </CardContent> 
</Card>
// </Stack>
  )
}

export default VideoCard

