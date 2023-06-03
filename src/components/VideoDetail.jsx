import { Stack ,Box, Typography,CardMedia,Card} from '@mui/material'
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "./Utilities/fetchFromApi";
import ReactPlayer from "react-player";
import Videos from './Videos';
import  backupimg from '../Imgs/pexels-dana-tentis-370799.jpg'

export default function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [ChannelDetail, setChannelDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  const fetchResults = () => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data)=>{
      setChannelDetail(data?.items[0]);
    })
  };
  useEffect(() => {
    fetchResults();
  }, [ChannelDetail]);

  // if(!ChannelDetail?.snippet) return 
  // <>Loading</>
  return (
    <>
    { !videoDetail?
      <Stack  sx={{
        width:'100%',
        height:'92vh',
        background:'radial-gradient(circle, rgba(64,25,3,1) 0%, rgba(5,83,150,0.9725140056022409) 100%)',
        color:'whitesmoke',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'40px'
        
      }}>Loading...</Stack>:
    <Box className='detailbackground' minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
          <Box sx={{ width: "100%", position: {md:"sticky",xs:'static' ,sm:'static'} , top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls playing={true} />
            <Typography sx={{
              color:"whitesmoke",
              marginLeft:'40px',
              fontSize:{ md:'25px',xs:'20px'},
              padding:'10px 0px'
            }}>
              {videoDetail.snippet.title}
            </Typography>
            <Box sx={{
              display:'flex',
              flexDirection:"column",
              marginLeft:'40px'
              
            }}>
              <Box sx={{
              display:'flex',
              flexDirection:'row',
            }}>
              {/* <Card
              sx={{ borderRadius: '50%', height: '50px', width: '50px', border: '2px solid #e3e3e3',
               }}>
              <CardMedia sx={{
                backgroundColor:'transparent',
                zIndex:'9999',

              }}
               image={ChannelDetail?.snippet?.thumbnails?.high?.url}
               />
              </Card> */}
              {/* <div style={{
                borderRadius: '50%', height: '50px', width: '50px', border: '2px solid #e3e3e3'
              }}>
                <img style={{
                  height:'100%',
                  width:'100%',
                  borderRadius: '50%'
                }} src={ ChannelDetail?.snippet?.thumbnails?.default?.url? ChannelDetail?.snippet?.thumbnails?.default?.url : backupimg} alt="" />
              </div> */}
            <Typography sx={{
              color:"#c4ccc6",
              fontSize:{ md:'25px',xs:'18px'},
              padding:'5px 0px'
            }}>
              {videoDetail.snippet.channelTitle}
            </Typography>
            </Box>
            {/* <Typography sx={{
              color:'#bcc2be',
              fontSize:'15px'
            }}>
            {parseInt(videoDetail.statistics.likeCount).toLocaleString()} likes
            </Typography> */}
            <Box>
            <Typography sx={{
              color:'#bcc2be',
              fontSize:{ md:'20px',xs:'12px'},
              paddingBottom:'30px'
            }}>
            {parseInt(videoDetail.statistics.viewCount).toLocaleString()} views
            </Typography>

            </Box>
            </Box>

            {/* <CardMedia
          image={ChannelDetail.snippet.thumbnails.high.url}
          alt={ChannelDetail.snippet.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '2px solid #e3e3e3' }}
        /> */}
        </Box>
        <Stack>
          <Videos videos={videos}/>
        </Stack>
      </Stack>
    </Box>
      }
      </>
  )
}
