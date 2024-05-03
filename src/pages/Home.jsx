import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../features/newsSlice";
import { Box, Grid } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  const { newsData } = useSelector((state) => state.news);
  console.log(newsData);

  useEffect(() => {
    dispatch(getNews());
  }, []);
  return (
    <Box>
  <Grid container spacing={2}>
    {/* İlk haber öğesi */}
    <Grid item  xs={12} md={6}>
      <p>İlk haber (2 satırlık alan)</p>
    </Grid>
    {/* Diğer haber öğeleri */}
    <Grid item xs={12} md={6}>
      {/* İkinci haber */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <p>İkinci haber</p>
        </Grid>
        <Grid item xs={6}>
          <p>Üçüncü haber</p>
        </Grid>
      </Grid>
      {/* Diğer haberler */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <p>Dördüncü haber</p>
        </Grid>
        <Grid item xs={6}>
          <p>Beşinci haber</p>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</Box>

  );
};

export default Home;
