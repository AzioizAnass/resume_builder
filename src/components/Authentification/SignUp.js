
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
import {useState} from 'react'
import {auth,db} from '../firebase-config'
import { doc, setDoc , addDoc  } from "firebase/firestore";
import { useUserAuth } from '../../context/UserContextAuth';
import { useNavigate,Link } from 'react-router-dom';
import { Alert } from 'react-alert'
    
const theme = createTheme({
});

const SignUp = () =>{
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const {signUp} = useUserAuth();
    const navigate = useNavigate();

//Functions:
     const ajouterUtilisateur = async () => {
      await setDoc(doc(db, "Users" , email), {
     firstName:firstName,
     lastName:lastName
    });
  }  

  
  
      const handleSubmit = async (event) => {
        event.preventDefault();
        try{
         if(password1 === password2){
         await(signUp(email,password1));
         ajouterUtilisateur(email,password1);
         navigate("/newCV");}else{
          alert("Password Error ")
         } 
    
        }catch(error){
          alert(error)
        } 
      };
    
  /*   inscription()
    ajouterUtilisateur()
  }; */

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
            Sign Up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e)=> setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e)=> setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=> setEmail(e.target.value)}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password1"
                  label="password"
                  type="password"
                  id="password1"
                  autoComplete="new-password"
                  onChange={(e)=> setPassword1(e.target.value)}

                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  name="password2"
                  label=" Confirm password"
                  type="password"
                  id="password2"
                  autoComplete="new-password"
                  onChange={(e)=> setPassword2(e.target.value)}

                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
    </Container>
    </ThemeProvider>
  );
}
   
  

export default SignUp
