import { Stack ,Box} from '@mui/material'
import ChannelCard from './ChannelCard'
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "./Utilities/fetchFromApi";
import Videos from './Videos';
import  backupimg from '../Imgs/pexels-dana-tentis-370799.jpg'
export default function ChannelDetail() {
  const [ChannelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);
  const [isloading,setisloading] = useState(null);
  const { id } = useParams();
  let backdropimg = ChannelDetail?.snippet.thumbnails.high.url? ChannelDetail?.snippet?.thumbnails?.high?.url :backupimg;
  useEffect(() => {  
    const fetchResults = async () => {
      setisloading(true)
      const data = await fetchFromApi(`channels?part=snippet&id=${id}`);
      setisloading(false)
      setChannelDetail(data?.items[0]);
      const videosData = await fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setisloading(false)
      setVideos(videosData.items);
    };
    fetchResults();
  }, [id]);

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
    {!isloading?(
      <Stack className='ChContainer'>
      <img className='backdropCh' src={backdropimg} alt="" />
      {/* reusing components */}
      <div style={{
        margin:'auto'
      }}>
      <ChannelCard  ChannelDetail={ChannelDetail}/>
      </div>
      <Box>
        {/* reusing components */}
        <Videos videos ={videos}/>
      </Box>
    </Stack>
    ):(
      <div className="Sclitems chmargin">
        <div className='chskl skeleton'></div>
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
      </div>
    )}
</>
  )
}
