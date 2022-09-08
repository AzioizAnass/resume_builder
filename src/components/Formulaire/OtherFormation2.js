import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import OtherFormation from './OtherFormation1'; 
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {useState} from 'react'
const OtherFormation2 = ({values, handleChange}) => {
  const [toggleFormation,setToggleFormation] = useState(false) ;
    return (
      <React.Fragment>
      <Typography variant="h6" sx={{ mt: 2 }} gutterBottom>
          Other Formation2
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              
              id="dateDebformation"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
              defaultValue={values.formationStartDate2}
              onChange={handleChange('formationStartDate2')}
              type="date"

            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              
              id="dateFinformation"
              fullWidth
              autoComplete="cc-number"
              variant="standard"
              defaultValue={values.formationEndDate2}
              onChange={handleChange('formationEndDate2')}
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
              defaultValue={values.college2}
              onChange={handleChange('college2')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              
              id="descriptionformation"
              label="Description"
              fullWidth
              autoComplete="cc-exp"
              variant="standard"
              defaultValue={values.formationDescription2}
              onChange={handleChange('formationDescription2')}
              multiline
              rows={4}
            />
          </Grid>
          </Grid>
         </React.Fragment>
    )
  }
  
  export default OtherFormation2