import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


export default function AddressForm({values, handleChange}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Profil
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            
            id="profil"
            name="profil"
            label="profil"
            fullWidth
            
            defaultValue={values.profil}
            onChange={handleChange('profil')}
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            
            id="description"
            name="description"
            label="description"
            fullWidth
            defaultValue={values.profilDescription}
            onChange={handleChange('profilDescription')}
            autoComplete="shipping address-line1"
            variant="standard"
            multiline
            rows={4}
          />
        </Grid>
        
      </Grid>
   
    </React.Fragment>
  );   }