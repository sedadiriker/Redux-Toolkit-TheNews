import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../features/newsSlice";
import { Box, Grid, Typography } from "@mui/material";
import NewsCard from "../components/NewsCard";
import Loading from "../components/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const { newsData,loading,error } = useSelector((state) => state.news);
  console.log(newsData);
  useEffect(() => {
    dispatch(getNews());
  }, []);
  return (
    <> {
      loading&& <Loading/>
    }
    {error && (
      <Typography variant="h4" color="error" component="div">
        Oops Something went wrong
      </Typography>
    )}
    <Box width={"90%"} m={"auto"} mt={2} pb={10}>
      <Box mt={6}>
        <Grid justifyContent={"center"} container columnGap={5} rowGap={2}>
          <Grid item xs={12} md={5}>
            <NewsCard imgheight={400} height={620} news={newsData[0]} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container columnGap={2} rowGap={2}>
              <Grid mb={2} item xs={12} md={5}>
                <NewsCard imgheight={150} fontSize={'1.1rem'} border={'none'} height={300} news={newsData[1]} />
              </Grid>
              <Grid item xs={12} md={5}>
                <NewsCard imgheight={150}  fontSize={'1.1rem'} height={300} news={newsData[2]} />
              </Grid>
            </Grid>
            <Grid container rowGap={2} columnGap={2}>
              <Grid item xs={12} md={5}>
                <NewsCard imgheight={150}  fontSize={'1.1rem'} height={300} news={newsData[3]} />
              </Grid>
              <Grid item xs={12} md={5}>
                <NewsCard imgheight={150}  fontSize={'1.1rem'} height={300} news={newsData[4]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box mt={6}>
      <Typography mb={2} fontSize={25} fontWeight={'bold'}>Other News</Typography>
      <hr />
        <Grid mt={5} justifyContent={"center"} container columnGap={5}>
          <Grid item xs={12} md={5}>
            <NewsCard imgheight={400} height={620} news={newsData[5]} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container columnGap={2} rowGap={2}>
              <Grid mb={2} xs={12} md={5}>
                <NewsCard imgheight={150}  fontSize={'1.1rem'} border={'none'} height={300} news={newsData[6]} />
              </Grid>
              <Grid item xs={12} md={5}>
                <NewsCard imgheight={150}  fontSize={'1.1rem'} height={300} news={newsData[7]} />
              </Grid>
            </Grid>
            <Grid container rowGap={2} columnGap={2}>
              <Grid item xs={12} md={5}>
                <NewsCard imgheight={150}  fontSize={'1.1rem'} height={300} news={newsData[8]} />
              </Grid>
              <Grid item xs={12} md={5}>
                <NewsCard imgheight={150}  fontSize={'1.1rem'} height={300} news={newsData[10]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box></>
   
  );
};

export default Home;
