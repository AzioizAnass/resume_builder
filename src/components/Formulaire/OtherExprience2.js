import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {useState} from 'react'




const OtherExprience2 = ({values, handleChange}) => {
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
            defaultValue={values.experienceStartDate2}
            onChange={handleChange('experienceStartDate2')}
            type="date"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            id="dateFin"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            defaultValue={values.experienceEndDate2}
            onChange={handleChange('experienceEndDate2')}
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
            defaultValue={values.company2}
            onChange={handleChange('company2')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            
            id="description"
            label="Description"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            defaultValue={values.experienceDescription2}
            onChange={handleChange('experienceDescription2')}
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
      {/* {toggleExperience ? 
       <OtherExprience values={values} handleChange={handleChange} />  : ""} */}
       </React.Fragment>
  )
}

export default OtherExprience2