import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { storage } from '../firebase-config';
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function AddressForm({values, handleChange,setImageUrl}) {
    const [image,setImage] = useState("");
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
    
  

    return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Resume Picture
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        
        </Grid>
        
        <Grid item xs={12} className="text-center">
        <Grid item xs={18} >
          <input type="file" onChange={handleChangeImage} />
          
          <p></p>
          <progress   value={progress} max="100" />
          <div >
          {progress!=100?<button className="btn btn-success" onClick={handleUpload} >Upload </button>:""}
          </div>
        </Grid>
        </Grid>
        
      </Grid>
   
    </React.Fragment>
  );   }