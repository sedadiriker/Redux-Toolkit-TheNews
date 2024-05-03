import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const  NewsCard=({news,height,imgheight,url,fontSize}) => {
  
    console.log(url)
  return (
    <Card  sx={{ Width: 345,height:height, }}>
      <CardActionArea component="a" href={news?.url} target="_blank">
        <CardMedia
          component="img"
          image={news?.image}
          height={imgheight}
          alt={news?.title}
        />
        <CardContent>
          <Typography fontSize={fontSize} gutterBottom variant="h5" component="div">
            {news?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {news?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NewsCard
