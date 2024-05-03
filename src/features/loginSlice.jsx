import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user:{email:"",password:""},
    isAuthenticated: false // Firebase ile oturum açma kontrolü

}

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser : (state,{payload}) => {
        state.user = payload
    },
    setIsAuthenticated : (state, {payload}) => {
      state.isAuthenticated = payload
    },
    logout : (state) => {
      state.user = {email:"",password:""}
    }
  }
});


export const {setUser,setIsAuthenticated,logout} = loginSlice.actions

export default loginSlice.reducer