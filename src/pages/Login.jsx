import * as React from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Avatar, FormControl, InputLabel, OutlinedInput } from "@mui/material"
import { Facebook, Google } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import  { auth } from '../auth/firebase'; 
import { setUser } from "../features/loginSlice"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false)
  const [email,setEmail] = React.useState("")
  const [password,setPassword] = React.useState("")
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

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

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(!isValidEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(false);
  };

  const isValidEmail = (email) => {
    return email.includes('@')
  };

  // console.log(email)
  // console.log(password)
  //! Google ile giriş
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth,provider)
        .then((result) => {
            
            const {user} = result;
            console.log(user)
            //! Redux store'da kullanıcı bilgilerini güncelle
            dispatch(setUser({
                email: user.email,
                password: user.accessToken,
                photoURL: user.photoURL,
                displayName : user.displayName
            }));
  
            
        })
        .catch((error) => {
            console.error( error);
        });
  };

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
        height:"81.9vh",
        pt:{xs:15, md:10}
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          border: "1px solid rgba(0, 0, 0, 0.197)",
          px: {md:5,xs:2},
          py: {xs:6,md:10},
          width: {xs:"70%",md:"40%"},
          position:'relative'
        }}
      >
        <FormControl variant="outlined">
          <TextField helperText={emailError && "Enter email address"} error={emailError} onFocus={()=> setEmailError(true)} onBlur={()=> setEmailError(false)} value={email} onChange={handleEmailChange} id="outlined-basic" label="Email" variant="outlined" />
        </FormControl>
        <FormControl variant="outlined">
          <TextField
            helperText={passwordError && "Enter password"}
            error={passwordError}
            onFocus={()=> setPasswordError(true)}
            onBlur={()=> setPasswordError(false)}
            value={password}
            onChange={handlePasswordChange}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            label="Password"
            variant="outlined"
            InputProps={{
              endAdornment: (
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
              ),
            }}
          />
        </FormControl>
        <Button color="error" onClick={handleSubmit}>Login</Button>
        <Avatar sx={{position:"absolute", top:{xs:'-30px',md:"-50px"}, left:"42%", width:{xs:'60px',md:"100px"}, height:{xs:'60px',md:"100px"}}}/>
      </Box>
      <Typography fontSize={10}>OR</Typography>
      <Box  sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          border: "1px solid rgba(0, 0, 0, 0.197)",
          px: {xs:2,md:5},
          py: {xs:1,md:5},
          width: {xs:"70%",md:"40%"},
          alignItems:"center"
        }}>
        <Typography fontSize={12} color={"gray"}>Log in with your social account</Typography>
        <Box>
          <Google sx={{cursor:"pointer"}} color="error" onClick={signInWithGoogle}  />
        </Box>
      </Box>
    </Box>
  );
};

export default Login
