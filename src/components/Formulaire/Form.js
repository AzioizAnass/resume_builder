import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import {useState,useEffect} from'react'

import {db} from '../firebase-config'
import { addDoc, collection } from "firebase/firestore";
import Contact from './Contact';
import Experience from './Experience';
import Formation from './Formation';
import Competances from './Competances';
import Profil from './Profil';
import NameColor from './NameColor'
import Projects from './Projects'
import Intrests from './Intrests'
import Image from './Image'

import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import { useUserAuth } from '../../context/UserContextAuth';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import CameraAltOutlined from '@mui/icons-material/CameraAltOutlined';

const steps = ['resumeInformations','Profil','Contacts','Picture', 'Experience','Projects', 'Formation' , 'Competences','Intrests' ];
const icons = [<FeedOutlinedIcon/>,<EngineeringOutlinedIcon/>, <PermContactCalendarOutlinedIcon /> ,<CameraAltOutlined />,<WorkOutlineOutlinedIcon/>,<AccountTreeOutlinedIcon/>,<SchoolOutlinedIcon/>,<AutoAwesomeOutlinedIcon/>,<SportsSoccerOutlinedIcon/>]




{/*function getStepContent(step) {
  // switch case emplacement 
  switch (step) {
    case 0:
      return <Contact />;
    case 1:
      return <Experience />;
    case 2:
      return <Formation />;
    case 3:
       return <Competances />;  
    case 4:
      return <Profil />;
    default:
      throw new Error('Unknown step');
  }
}*/}
const theme = createTheme();




// function Checkout() {
export default function Form() {
 const [activeStep, setActiveStep] = React.useState(0);

const {user} = useUserAuth() 
const [refCv , setRefCv] = useState("")
const [imageUrl,setImageUrl] = useState("")  
 

const [multiFormValues, setMultiFormValues] = useState({
  resumeName:"",
  color:"",
  firstName:"",
  lastName:"",
  linkedIn:"",
  gitHub: "",
  email:"",
  phoneNumber:"",
  address:"",

  experienceStartDate:"",
  experienceEndDate:"",
  company:"",
  experienceDescription:"",

  experienceStartDate1:"",
  experienceEndDate1:"",
  company1:"",
  experienceDescription1:"",

  experienceStartDate2:"",
  experienceEndDate2:"",
  company2:"",
  experienceDescription2:"",

 

  formationStartDate:"",
  formationEndDate:"",
  college:"",
  formationDescription:"",

  formationStartDate1:"",
  formationEndDate1:"",
  college1:"",
  formationDescription1:"",

  formationStartDate2:"",
  formationEndDate2:"",
  college2:"",
  formationDescription2:"",

  skills:"",
  skills1:"",
  skills2:"",
  skills3:"",
  skills4:"",

  profil:"",
  profilDescription:"",

  project:"",
  projectDesc:"",

  project1:"",
  projectDesc1:"",

  project2:"",
  projectDesc2:"",

  intrests:""

})

const ajouterDoc = async () => {
  
    var date1 = new Date();
    var formatDate = date1.getDate()+ '/' + (date1.getMonth()+1)+'/'+date1.getFullYear() +' '+ date1.getHours()+':'+date1.getMinutes();
  
    const docRef = await addDoc(collection(db,"Users",user.email ,"cvs") , {
      resumeName:multiFormValues.resumeName,
      color:multiFormValues.color,

      firstName:multiFormValues.firstName,
      lastName:multiFormValues.lastName,
      linkedIn:multiFormValues.linkedIn,
      gitHub:multiFormValues.gitHub,
      email:multiFormValues.email,
      phoneNumber:multiFormValues.phoneNumber,
      address:multiFormValues.address,

      experienceStartDate:multiFormValues.experienceStartDate,
      experienceEndDate:multiFormValues.experienceEndDate,
      company:multiFormValues.company,
      experienceDescription:multiFormValues.experienceDescription,

      experienceStartDate1:multiFormValues.experienceStartDate1,
      experienceEndDate1:multiFormValues.experienceEndDate1,
      company1:multiFormValues.company1,
      experienceDescription1:multiFormValues.experienceDescription1,

      experienceStartDate2:multiFormValues.experienceStartDate2,
      experienceEndDate2:multiFormValues.experienceEndDate2,
      company2:multiFormValues.company2,
      experienceDescription2:multiFormValues.experienceDescription2,

      
      formationStartDate:multiFormValues.formationStartDate,
      formationEndDate:multiFormValues.formationEndDate,
      college:multiFormValues.college,
      formationDescription:multiFormValues.formationDescription,
      
      formationStartDate1:multiFormValues.formationStartDate1,
      formationEndDate1:multiFormValues.formationEndDate1,
      college1:multiFormValues.college1,
      formationDescription1:multiFormValues.formationDescription1,

      formationStartDate2:multiFormValues.formationStartDate2,
      formationEndDate2:multiFormValues.formationEndDate2,
      college2:multiFormValues.college2,
      formationDescription2:multiFormValues.formationDescription2,

      skills:multiFormValues.skills,
      skills1:multiFormValues.skills1,
      skills2:multiFormValues.skills2,
      skills3:multiFormValues.skills3,
      skills4:multiFormValues.skills4,

      profil:multiFormValues.profil,
      profilDescription:multiFormValues.profilDescription,

      project:multiFormValues.project,
      projectDesc:multiFormValues.projectDesc,
      project1:multiFormValues.project1,
      projectDesc1:multiFormValues.projectDesc1,
      project2:multiFormValues.project2,
      projectDesc2:multiFormValues.projectDesc2,

      intrests:multiFormValues.intrests,
      date:formatDate,
      imgUrl:imageUrl,
    });
    setRefCv(docRef.id)
    console.log(docRef.id)
    console.log(refCv)
    
}

const handleChange = (input) => (e) => {
  setMultiFormValues({...multiFormValues, [input]: e.target.value})
}

const handleNext = () => {
  setActiveStep(activeStep + 1);
};

const handleNext1 = () => {
  handleNext();
  ajouterDoc();
  console.log("slm");

};

const handleBack = () => {
  setActiveStep(activeStep - 1);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  ajouterDoc();
  console.log("slm");
  //navigate(`/my-resume/${cvRef}`)   
  };
  
  return (
    <div >
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Container component="main" maxWidth="md" sx={{ mb: 4 }} >
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 4, md: 6 } }}>
          <Typography component="h1" variant="h4" align="center">
            Informations
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>    
          
          
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {icons.map((icon) => (
              <Step key={icons.indexOf(icon)}>
                <StepLabel>{icon}</StepLabel>
              </Step>
            ))}
            </Stepper> 


        
            
              
           
              
     <React.Fragment>
      
     {activeStep === 0 && (
        <NameColor values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 1 && (
        <Profil values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 2 && (
        <Contact values={multiFormValues} handleChange={handleChange} setImageUrl={setImageUrl} />
      )}
      {activeStep === 3 && (
        <Image values={multiFormValues} handleChange={handleChange} setImageUrl={setImageUrl}/>
      )}
      {activeStep === 4 && (
        <Experience values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 5 && (
        <Projects values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 6 && (
        <Formation values={multiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 7 && (
        <Competances values={multiFormValues} setMultiFormValues={setMultiFormValues} handleChange={handleChange} />
      )}
      {activeStep === 8 && (
        <Intrests values={multiFormValues} setMultiFormValues={setMultiFormValues} handleChange={handleChange} />
      )}
     
     
     <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  {(activeStep < 8) ? <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >Next</Button> : "" }
                    
                    {(activeStep === 8) ? <Button
                    variant="contained"
                    onClick={handleNext1}
                    sx={{ mt: 3, ml: 1 }}
                    
                  >Submit</Button> : "" }
                   
                  {activeStep === steps.length ? <Link className='btn btn-danger mt-4 ' to={`/my-resume/${refCv}`}>Show Resume</Link> : ""}
                </Box>
              

               
              </React.Fragment>
                 </Box>
    


    
        </Paper>
        
      </Container>
    </ThemeProvider>
    </div>
          );}


