import * as React from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormControl, InputLabel, OutlinedInput } from "@mui/material"
import { Facebook, Google } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { setUser } from "../features/loginSlice"

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false)
  const [email,setEmail] = React.useState("")
  const [password,setPassword] = React.useState("")
  const dispatch = useDispatch()

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    dispatch(setUser({email,password}))
    setEmail("")
    setPassword("")
  }
  // console.log(email)
  // console.log(password)
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        height: "75vh",
        width:"100vw",
        height:"95vh",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          border: "1px solid rgba(0, 0, 0, 0.197)",
          px: 5,
          py: 10,
          width: {xs:"60%",md:"40%"},
        }}
      >
        <FormControl variant="outlined">
          <TextField value={email} onChange={(e)=> setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button onClick={handleSubmit}>Login</Button>
      </Box>
      <Typography fontSize={10}>OR</Typography>
      <Box  sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          border: "1px solid rgba(0, 0, 0, 0.197)",
          px: 5,
          py: 10,
          width: {xs:"60%",md:"40%"},
        }}>
        <Typography>Log in with your social account</Typography>
        <Box display={"flex"} gap={3}>
          <Google  />
          <Facebook />
        </Box>
      </Box>
    </Box>
  );
};

export default Login