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
        const API_KEY = process.env.REACT_APP_api
        const URL = ` https://gnews.io/api/v4/search?q=example&lang=en&country=tr&max=10&apikey=${API_KEY}`
        const {data} = await axios(URL)
        return data.articles
        // console.log(data)
    }
)
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewsData: (state) => {
        state.newsData = []
      },
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

export const {clearNewsData} = newsSlice.actions

export default newsSlice.reducer