import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user:{email:"",password:""}
}

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser : (state,{payload}) => {
        state.user = payload
    }
    
  }
});

export const {setUser} = loginSlice.actions

export default loginSlice.reducer