import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

const Skills4 =({values, handleChange})=>{ 
  const [toggleSkills,settoggleSkills] = useState(false) ;
  return (
    <React.Fragment className="mt-2">
      <Typography variant="h6" className="mt-2"  gutterBottom>
      Other Skill
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            
            id="competences "
            name="competences"
            label="Skills"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            defaultValue={values.skills4}
            onChange={handleChange('skills4')}
          />
        </Grid>
        </Grid>
      
        
    </React.Fragment>
  );

}

const Skills3 =({values, handleChange})=>{ 
  const [toggleSkills,settoggleSkills] = useState(false) ;
  return (
    <React.Fragment className="mt-2">
      <Typography variant="h6" className="mt-2"  gutterBottom>
      Other Skill 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            
            id="competences "
            name="competences"
            label="Skills"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            defaultValue={values.skills3}
            onChange={handleChange('skills3')}
          />
        </Grid>
        </Grid>
        <Button
                    variant="contained"
                    onClick={()=>settoggleSkills(!toggleSkills)}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {toggleSkills ? '-' : '+'}
  </Button>
      {toggleSkills ? 
       <Skills4 values={values} handleChange={handleChange} />  : ""}
        
    </React.Fragment>
  );

}

const Skills2 =({values, handleChange})=>{ 
  const [toggleSkills,settoggleSkills] = useState(false) ;
  return (
    <React.Fragment>
      <Typography variant="h6"  className="mt-2" gutterBottom>
      Other Skill 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            
            id="competences "
            name="competences"
            label="Skills"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            defaultValue={values.skills2}
            onChange={handleChange('skills2')}
          />
        </Grid>
        </Grid>
        <Button
                    variant="contained"
                    onClick={()=>settoggleSkills(!toggleSkills)}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {toggleSkills ? '-' : '+'}
  </Button>
      {toggleSkills? 
       <Skills3 values={values} handleChange={handleChange} />  : ""}
        
    </React.Fragment>
  );

}


const Skills1 =({values, handleChange,setMultiFormValues})=>{ 
  const [toggleSkills,settoggleSkills] = useState(false) ;

  
   

  return (
    <React.Fragment className="mt-2">
      <Typography variant="h6" className="mt-2"  gutterBottom>
      Other Skill 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            id="competences "
            name="competences"
            label="Skills"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            defaultValue={values.skills1}
            onChange={handleChange('skills1')}
          />
        </Grid>
        </Grid>
        <Button
                    variant="contained"
                    onClick={()=>settoggleSkills(!toggleSkills)}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {toggleSkills? '-' : '+'}
  </Button>
      {toggleSkills ? 
       <Skills2 values={values} handleChange={handleChange} />  : ""}
        
    </React.Fragment>
  );

}


  export default function Skills({values, handleChange,setMultiFormValues}) {
    const [toggleSkills,settoggleSkills] = useState(false) ;
    

     
    

  return (
    <React.Fragment >
      <Typography variant="h6" className="mt-2" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            id="competences "
            name="competences"
            label="Skills"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            defaultValue={values.skills}
            onChange={handleChange('skills')}
          />
        </Grid>
        </Grid>
        {
       
          

        }
        <Button
                    variant="contained"
                    onClick={()=>settoggleSkills(!toggleSkills)}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {toggleSkills ? '-' : '+'}
  </Button>
      {toggleSkills ? 
       <Skills1 values={values} handleChange={handleChange} />  : ""}
        
    </React.Fragment>
  );
}