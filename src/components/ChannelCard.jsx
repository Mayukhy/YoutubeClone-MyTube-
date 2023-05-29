import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

const ChannelCard = ({ ChannelDetail }) =>{
  return (
  <Box className='chHover'
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: '10px 40px',
    }}
  >
    <Link to={`/channel/${ChannelDetail?.id?.channelId}`}
      style={{
        textDecoration:'none'
      }} >
      <CardContent  sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        <CardMedia 
          image={ChannelDetail?.snippet?.thumbnails?.high?.url}
          alt={ChannelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '2px solid #e3e3e3' }}
        />
        <Typography sx={{
          width:'200px'
        }} variant="h6">
          {ChannelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography>
        {ChannelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(ChannelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
)
};

export default ChannelCard;

