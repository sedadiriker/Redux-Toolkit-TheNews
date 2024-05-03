import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    newsData : [],
    loading: false,
    error:false
}

export const getNews = createAsyncThunk(
    "getNews",
    async () => {
        const API_KEY = process.env.REACT_APP_apikey
        const URL = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`
        const {data} = await axios(URL)
        return data.articles
    }
)
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
   
  },
  extraReducers:(builder) => {
    builder.addCase(getNews.pending, (state)=> {
        state.loading = true
    })
    .addCase(getNews.fulfilled,(state,{payload})=> {
        state.loading = false
        state.newsData = payload
    })
    .addCase(getNews.rejected,(state)=>{
        state.error = true
        state.loading = false
    })
}
});

export const {} = newsSlice.actions

export default newsSlice.reducer