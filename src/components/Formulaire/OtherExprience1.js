import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {useState} from 'react'
import OtherExprience2 from './OtherExprience2';




const OtherExprience = ({values, handleChange}) => {
  const [toggleExperience,setToggleExperience] = useState(false) ;
  return (
    <React.Fragment>
    <Typography variant="h6" sx={{ mt: 2 }} gutterBottom>
        Other Experience 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            
            id="dateDeb"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            defaultValue={values.experienceStartDate1}
            onChange={handleChange('experienceStartDate1')}
            type="date"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            id="dateFin"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            defaultValue={values.experienceEndDate1}
            onChange={handleChange('experienceEndDate1')}
            type="date"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            
            id="societe"
            label="Company"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            defaultValue={values.company1}
            onChange={handleChange('company1')}
            
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            
            id="description"
            label="Description"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            defaultValue={values.experienceDescription1}
            onChange={handleChange('experienceDescription1')}
            multiline
            rows={4}
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
       <OtherExprience2 values={values} handleChange={handleChange} />  : ""}
       </React.Fragment>
  )
}

export default OtherExprience