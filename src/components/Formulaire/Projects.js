import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {useState,useEffect} from'react'

const OtherProject2 = ({values, handleChange})=>{
  const [toggleProject,setToggleProject] = useState(false) ;


  return(
      <>
      <Typography variant="h6" gutterBottom className="mt-2">
      Other Project 
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          
          id="project"
          name="project"
          label="Project Label "
          fullWidth
          defaultValue={values.project2}
          onChange={handleChange('project2')}
          autoComplete="given-name"
          variant="standard"
        />
      </Grid>
      
      <Grid item xs={12}>
        <TextField
          
          id="description"
          name="description"
          label="Description"
          defaultValue={values.projectDesc2}
          onChange={handleChange('projectDesc2')}
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
          multiline
          rows={4}
        />
      </Grid></Grid>
      <Button
                    variant="contained"
                    onClick={()=>setToggleProject(!toggleProject)}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {toggleProject ? '-' : '+'}
  </Button>

      </>
  )
}



const OtherProject1 = ({values, handleChange})=>{
  const [toggleProject,setToggleProject] = useState(false) ;


    return(
        <>
        <Typography variant="h6" gutterBottom className="mt-2">
        Other Project 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            
            id="project"
            name="project"
            label="Project Label "
            fullWidth
            defaultValue={values.project1}
            onChange={handleChange('project1')}
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            
            id="description"
            name="description"
            label="Description"
            defaultValue={values.projectDesc1}
            onChange={handleChange('projectDesc1')}
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            multiline
            rows={4}
          />
        </Grid></Grid>
        <Button
                    variant="contained"
                    onClick={()=>setToggleProject(!toggleProject)}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {toggleProject ? '-' : '+'}
  </Button>
      {toggleProject ? 
       <OtherProject2 values={values} handleChange={handleChange} />  : ""}

        </>
    )
}

export default function AddressForm({values, handleChange}) {
  
 const [toggleProject,setToggleProject] = useState(false) ;
  
    return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Projects 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            
            id="project"
            name="project"
            label="Project Label "
            fullWidth
            defaultValue={values.project}
            onChange={handleChange('project')}
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            
            id="description"
            name="description"
            label="Description"
            defaultValue={values.projectDesc}
            onChange={handleChange('projectDesc')}
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            multiline
            rows={4}
          />
        </Grid>
        
      </Grid>
      <Button
                    variant="contained"
                    onClick={()=>setToggleProject(!toggleProject)}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {toggleProject ? '-' : '+'}
  </Button>
      {toggleProject ? 
       <OtherProject1 values={values} handleChange={handleChange} />  : ""}
    </React.Fragment>
  );   }