import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import OtherFormation2 from './OtherFormation2'; 
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {useState} from 'react';
const OtherFormation1 = ({values, handleChange}) => {
  const [toggleFormation,setToggleFormation] = useState(false) ;
    return (
      <React.Fragment>
      <Typography variant="h6" sx={{ mt: 2 }} gutterBottom>
          Other Formation1
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              
              id="dateDebformation"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
              defaultValue={values.formationStartDate1}
              onChange={handleChange('formationStartDate1')}
              type="date"

            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              
              id="dateFinformation"
              fullWidth
              autoComplete="cc-number"
              variant="standard"
              defaultValue={values.formationEndDate1}
              onChange={handleChange('formationEndDate1')}
              type="date"

            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              
              id="societeformation"
              label="College"
              fullWidth
              autoComplete="cc-exp"
              variant="standard"
              defaultValue={values.college1}
              onChange={handleChange('college1')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              
              id="descriptionformation"
              label="Description"
              fullWidth
              autoComplete="cc-exp"
              variant="standard"
              defaultValue={values.formationDescription1}
              onChange={handleChange('formationDescription1')}
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
       <OtherFormation2 values={values} handleChange={handleChange} />  : ""}
         </React.Fragment>
    )
  }
  
  export default OtherFormation1