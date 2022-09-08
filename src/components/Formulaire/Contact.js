import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
//import { useState } from 'react';
//import { storage } from '../firebase-config';
//import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


export default function Contact({values, handleChange,setImageUrl}) {
/*const [image,setImage] = useState("");
  const [url,setUrl]= useState("");
  const [progress, setProgress] = useState(0);

  const handleChangeImage = (e)=>{
    if(e.target.files[0]){
      setImage(e.target.files[0]);
    }

  }
  const handleUpload = event => {
    event.preventDefault();
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setProgress(progress);
    
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      setImageUrl(downloadURL);
    })
  }
    )
  





    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            setUrl(url);

          });
      }
    );

    
  };
  console.log(image)*/
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contacts 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="nom"
            name="nom"
            label="First Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            defaultValue={values.firstName}
            onChange={handleChange('firstName')}
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="prenom"
            name="prenom"
            label="Last Name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            defaultValue={values.lastName}
            onChange={handleChange('lastName')}
          />
        </Grid>
        </Grid>
        <Grid container spacing={3}sx={{ mt: 1 }}>
        <Grid item xs={12} sm={6} >
          <TextField
            
            id="linkedIn"
            name="linkedIn"
            label="LinkedIn"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            defaultValue={values.linkedIn}
            onChange={handleChange('linkedIn')}
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            
            id="gitHub"
            name="gitHub"
            label="GitHub"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            defaultValue={values.gitHub}
            onChange={handleChange('gitHub')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            defaultValue={values.email}
            onChange={handleChange('email')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="num"
            name="num"
            label="Phone Number"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            defaultValue={values.phoneNumber}
            onChange={handleChange('phoneNumber')}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            id="adresse"
            name="adresse"
            label="Address"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            defaultValue={values.address}
            onChange={handleChange('address')}
          />
        </Grid>
        
        {/*<Grid item xs={18} >
          <input type="file" onChange={handleChangeImage} />
          {progress!=100?<button onClick={handleUpload} >Upload </button>:""}
          <p></p>
          <progress value={progress} max="100" />
  </Grid>*/}
        
      </Grid>

      
    {/*  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>

                  <Button
                    variant="contained"
                    onClick={()=> setActiveStep(1)}
                    sx={{ mt: 3, ml: 1 }}
                  >Suivant</Button>
  </Box>*/}
    </React.Fragment>
  );
}