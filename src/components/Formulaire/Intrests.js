import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


export default function AddressForm({values, handleChange}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Intrests
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            
            id="intrests"
            name="intrests"
            label="intrests"
            fullWidth
            
            defaultValue={values.intrests}
            onChange={handleChange('intrests')}
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        
        
      </Grid>
   
    </React.Fragment>
  );   }