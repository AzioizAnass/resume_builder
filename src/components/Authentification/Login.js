
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//Logic import:
import {useState} from 'react'
import { useUserAuth } from '../../context/UserContextAuth';
import { useNavigate,Link } from 'react-router-dom';


const theme = createTheme();

const Login =()=> {
  //variables:
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useUserAuth();
  const {logout} = useUserAuth();
  const{user} = useUserAuth();
  const navigate = useNavigate();

  //Functions:
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
       await(login(email,password));
       navigate("/newCV")
       await console.log(user?.email);  
    }catch(error){
      alert("Password or Email incorrect !!")
      } 
    };
    const deco = async()=>{
      await(logout());
    }


   
  

 

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            SignIn
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=> setEmail(e.target.value)}

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=> setPassword(e.target.value)}

            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to ="/signup"   variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
         {user?.email} 
      </Container>
    </ThemeProvider>
  );
}
     
     
     
     
     
     {/*  <form className='my-5 mx-5 px-5'>
                <h3>Login</h3>
                <div className="form-group container ">
                    <label>Email address</label>
                    <input type="email" className="form-control  " placeholder="Enter email" />
                </div>
                <div className="form-group container ">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group container ">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input " id="customCheck1" />
                        <label className="custom-control-label my-1" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block my-2">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
  </form>*/}


export default Login
