import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import OtherExprience1 from './OtherExprience1';
import {useState} from 'react'

export default function Experience({values, handleChange}) {
 const [toggleExperience,setToggleExperience] = useState(false) ;
 
  return (
    
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Experience
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            
            id="dateDeb"
            fullWidth     
            autoComplete="cc-name"
            variant="standard"
            defaultValue={values.experienceStartDate}
            onChange={handleChange('experienceStartDate')}
            type="date"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            id="dateFin"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            defaultValue={values.experienceEndDate}
            onChange={handleChange('experienceEndDate')}
            type="date"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            
            id="societe"
            label="Entreprise"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            defaultValue={values.company}
            onChange={handleChange('company')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            
            id="description"
            label="Description"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            multiline
            rows={4}
            defaultValue={values.experienceDescription}
            onChange={handleChange('experienceDescription')}
          />
        </Grid>
  </Grid>
            <Button
                    variant="contained"
                    onClick={()=>setToggleExperience(!toggleExperience)}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {toggleExperience ? '-' : '+'}
  </Button>
      {toggleExperience ? 
       <OtherExprience1 values={values} handleChange={handleChange} />  : ""}
    
    </React.Fragment>
  );
}