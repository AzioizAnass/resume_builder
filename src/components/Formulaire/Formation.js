import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import OtherFormation1 from './OtherFormation1'; 
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {useState} from 'react'

export default function Formation({values, handleChange}) {
  const [toggleFormation,setToggleFormation] = useState(false) ;
  return (
    <React.Fragment >
      <Typography variant="h6" gutterBottom>
        Formation
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            
            id="dateDebformation"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            defaultValue={values.formationStartDate}
            onChange={handleChange('formationStartDate')}
            type="date"

         />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            id="dateFinformation"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            defaultValue={values.formationEndDate}
            onChange={handleChange('formationEndDate')}
            type="date"
           

          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            
            id="ecole"
            label="College"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            defaultValue={values.college}
            onChange={handleChange('college')}
            
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            
            id="descriptionformation"
            label="Formation Description "
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            defaultValue={values.formationDescription}
            onChange={handleChange('formationDescription')}
            multiline
            rows={4}
            
          />
        </Grid>
       
        
      </Grid>
      <Button
                    variant="contained"
                    onClick={()=>setToggleFormation(!toggleFormation)}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {toggleFormation ? '-' : '+'}
  </Button>
      {toggleFormation ? 
       <OtherFormation1 values={values} handleChange={handleChange} />  : ""}
      
    </React.Fragment>
  );
}