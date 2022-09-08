import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function NameColor({values, handleChange}) {
    const colors=["primary","secondary","success","danger","warning","info"]
    const colorsNames=["Blue","Gray","Green","Red","Orange","Sky Blue"]
    const selectColor =(item)=>{
    values.color = item
   }
    return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resume Informations
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="name"
            name="Resume Label"
            label="Resume Label"
            fullWidth
            defaultValue={values.resumeName}
            onChange={handleChange('resumeName')}
            autoComplete="given-name"
            variant="standard"
            className="mb-3"
          />
        </Grid>
        
        
        
      </Grid>

      <p className="my-2"><b>Color </b></p> 
<div className="d-flex justify-content-center">

   {colors.map((item)=>
       <button type="button" className={`btn mx-1 btn-${item}`} onClick={()=>selectColor(item)} >{colorsNames[colors.indexOf(item)]}</button>
   )}

</div>

    </React.Fragment>
  );
}