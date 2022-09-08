import React, { forwardRef, useEffect, useRef, useState } from "react";

import ReactToPrint from "react-to-print";
import Typography from '@mui/material/Typography';
import {useParams} from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
import {db} from "../firebase-config"
import { useUserAuth } from "../../context/UserContextAuth";
import {
  AtSign,
  Calendar,
  GitHub,
  Linkedin,
  MapPin,
  Paperclip,
  Phone,
  Mail,
  ArrowDown
} from "react-feather";
const Resume = () => {
  let { id } = useParams();
  const {user} = useUserAuth()



  const [firstName,setFirstName]= useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [linkedIn,setLinkedIn]=useState("")
  const [gitHub,setGitHub] = useState("")
  const [phoneNumber,setPhoneNumber]=useState("")
  const [address,setAddress]=useState("")
  
  const [experienceStartDate1,setExperienceStartDate1]=useState("")
  const [experienceEndDate1,setExperienceEndDate1]=useState("")
  const [company1,setCompany1]=useState("")
  const [experienceDescription1,setExperienceDescription1]=useState("")
  const [formationStartDate1,setFormationStartDate1]=useState("")
  const [formationEndDate1,setFormationEndDate1]=useState("")
  const [college1,setCollege1]=useState("")
  const [formationDescription1,setFormationDescription1]=useState("")
  const [experienceStartDate2,setExperienceStartDate2]=useState("")
  const [experienceEndDate2,setExperienceEndDate2]=useState("")
  const [company2,setCompany2]=useState("")
  const [experienceDescription2,setExperienceDescription2]=useState("")
  
  const [experienceDescription,setExperienceDescription]=useState("")
  const [experienceStartDate,setExperienceStartDate]=useState("")
  const [experienceEndDate,setExperienceEndDate]=useState("")
  const [company,setCompany]=useState("")

  const [formationStartDate,setFormationStartDate]=useState("")
  const [formationEndDate,setFormationEndDate]=useState("")
  const [formationDescription,setFormationDescription]=useState("")
  const [college,setCollege]=useState("")
  

  const [formationStartDate2,setFormationStartDate2]=useState("")
  const [formationEndDate2,setFormationEndDate2]=useState("")
  const [college2,setCollege2]=useState("")
  const [formationDescription2,setFormationDescription2]=useState("")
  
  const [skills,setSkills]=useState("")
  const [skills1,setSkills1]=useState("")
  const [skills2,setSkills2]=useState("")
  const [skills3,setSkills3]=useState("")
  const [skills4,setSkills4]=useState("")

  const [profil,setProfil]=useState("")
  const [profilDescription,setProfilDescription] =useState("")

  const [color ,setColor]=useState("")
  
  const [project1 ,setProject1]=useState("")
  const [projectDesc1 ,setProjectDesc1]=useState("")
  const [project ,setProject]=useState("")
  const [projectDesc ,setProjectDesc]=useState("")

  const [project2 ,setProject2]=useState("")
  const [projectDesc2 ,setProjectDesc2]=useState("")
  const [intrests, setIntrests]=useState("")
  const [imgUrl,setImgUrl] = useState("")
  


  const OtherProject1 = ({project1,projectDesc1}) => {
    return (
      <div>
          <div className="section__list-item">
            <div className="name"><b>{project1}</b></div>
            <div className="text">
              {projectDesc1}
            </div>
          </div>   
      </div>
    )}
    const OtherProject2 = ({project2,projectDesc2}) => {
      return (
        <div>
            <div className="section__list-item">
              <div className="name"><b>{project2}</b></div>
              <div className="text">
                {projectDesc2}
              </div>
            </div>   
        </div>
      )}

  const OtherExp1 = ({company1,experienceStartDate1,experienceEndDate1,experienceDescription1}) => {
    return (
      <div>
          <div className="section__list-item">
              <div className="left">
                <div className="name"><b>{company1}</b></div>
                <div className="addr">{experienceStartDate1} | {experienceEndDate1}</div>
                <div className="duration">{experienceDescription1}</div>
              </div>
              </div>   
      </div>
    )}

    const OtherExp2 = ({company2,experienceStartDate2,experienceEndDate2,experienceDescription2}) => {
      return (
        <div>
            <div className="section__list-item">
                <div className="left">
                  <div className="name"><b>{company2}</b></div>
                  <div className="addr">{experienceStartDate2} | {experienceEndDate2}</div>
                  <div className="duration">{experienceDescription2}</div>
                </div>
                </div>   
        </div>
      )}
    
    const OtherFrm1 = ({college1,formationStartDate1,formationEndDate1,formationDescription1})=>{
    return(
        <div className="section__list-item">
            <div className="left">
              <div className="name"><b>{college1}</b></div>
              <div className="duration">{formationStartDate1} | {formationEndDate1}</div>
              <div className="addr">{formationDescription1}</div>
            </div>
          </div>
      
    )
  } 
  const OtherFrm2 = ({college2,formationStartDate2,formationEndDate2,formationDescription2})=>{
    return(
        <div className="section__list-item">
            <div className="left">
              <div className="name"><b>{college2}</b></div>
              <div className="duration">{formationStartDate2} | {formationEndDate2}</div>
              <div className="addr">{formationDescription2}</div>
            </div>
          </div>
      
    )
  } 

const retrieveData= async () => {
const docRef = doc(db, "Users",user.email,"cvs",id);
const docSnap = await getDoc(docRef);
if (docSnap.exists()) {
  console.log("Document data:", docSnap.data().address);
  setFirstName(docSnap.data().firstName)
  setLastName(docSnap.data().lastName)
  setLinkedIn(docSnap.data().linkedIn)
  setGitHub(docSnap.data().gitHub)
  setEmail(docSnap.data().email)
  setPhoneNumber(docSnap.data().phoneNumber)
  setAddress(docSnap.data().address)

  setExperienceStartDate(docSnap.data().experienceStartDate)
  setExperienceEndDate(docSnap.data().experienceEndDate)
  setCompany(docSnap.data().company)
  setExperienceDescription(docSnap.data().experienceDescription)

  setExperienceStartDate1(docSnap.data().experienceStartDate1)
  setExperienceEndDate1(docSnap.data().experienceEndDate1)
  setCompany1(docSnap.data().company1)
  setExperienceDescription1(docSnap.data().experienceDescription1)
  setFormationStartDate1(docSnap.data().formationStartDate1)
  setFormationEndDate1(docSnap.data().formationEndDate1)
  setCollege1(docSnap.data().college1)
  setExperienceStartDate2(docSnap.data().experienceStartDate2)
  setExperienceEndDate2(docSnap.data().experienceEndDate2)
  setCompany2(docSnap.data().company2)
  setExperienceDescription2(docSnap.data().experienceDescription2)
  setFormationStartDate2(docSnap.data().formationStartDate2)
  setFormationEndDate2(docSnap.data().formationEndDate2)
  setCollege2(docSnap.data().college2)
  setFormationDescription2(docSnap.data().formationDescription2)
  setFormationDescription1(docSnap.data().formationDescription1)
  
  setFormationStartDate(docSnap.data().formationStartDate)
  setFormationEndDate(docSnap.data().formationEndDate)
  setCollege(docSnap.data().college)
  setFormationDescription(docSnap.data().formationDescription)

  setSkills(docSnap.data().skills)
  setSkills1(docSnap.data().skills1)
  setSkills2(docSnap.data().skills2)
  setSkills3(docSnap.data().skills3)
  setSkills4(docSnap.data().skills4)
  setProfil(docSnap.data().profil)
  
  setProfilDescription(docSnap.data().profilDescription)
  setColor(docSnap.data().color)
  setProject(docSnap.data().project)
  setProjectDesc(docSnap.data().projectDesc)
  setProject1(docSnap.data().project1)
  setProjectDesc1(docSnap.data().projectDesc1)
  setProject2(docSnap.data().project2)
  setProjectDesc2(docSnap.data().projectDesc2)
  setIntrests(docSnap.data().intrests)
  setImgUrl(docSnap.data().imgUrl)
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
  } 

  

  
useEffect(()=>{
  retrieveData()
})
console.log(imgUrl)

const resumeRef = useRef();
  return (
    <div className="d-flex justify-content-start mt-5">
  <link
    href="https://fonts.googleapis.com/css?family=Lato:400,300,700"
    rel="stylesheet"
    type="text/css"
  />

  <div className="container px-4 pt-4 border border-dark " >
    <div className="px-3 pt-2" style={{width:"100%"}} ref={resumeRef} >
    <div className="header ">
      
      <div className="d-flex justify-content-around">
      <div style={{width:"73%"}}>
      <div className="full-name">
      <Typography variant="h2" gutterBottom component="div">
      {firstName + " "+lastName}
      </Typography>
      </div>
     
      <div className="contact-info">
        
        <div>
        <span className={`text-${color}`} ><Mail/>: </span>
        <span className="email-val">{email}</span>
        </div>
        
        <div>
        <span className={`email text-${color}`}><Phone/>: </span>
        <span className="email-val">{phoneNumber}</span>
        </div>
        
        
        <div>
        <span className={`email text-${color}`}><Linkedin/>: </span>
        <span className="email-val">{linkedIn}</span>
        </div>

        <div >
        <span className={`email text-${color}`}><GitHub/>: </span>
        <span className="github-val">{gitHub}</span>
        </div>
        
        <div className="mb-3">
        <span className={`email text-${color}`}><MapPin/>: </span>
        <span className="github-val">{address}</span>
        </div>
        </div>
        
      </div>
      <img src={imgUrl} alt="no photo " height="210px" width="210px" />

      </div>
      <div className="about">
       
        <span className="position"><b>{profil+ " "}</b></span>
        <br/>
        <span className="desc">
          {profilDescription}
        </span>
      
      </div>
    </div>
    <div className="details">
      <div className="section">
        
      <h3 className={`section__title text-${color} my-2`}><b>Experience</b></h3>
        <div className="section__list">
          <div className="section__list-item">
            <div className="left">
              <div className="name"><b>{company}</b></div>
              <div className="duration">{experienceStartDate} | {experienceEndDate}</div>
              <div className="addr">{experienceDescription}</div>
            </div>
            </div>
         { (experienceStartDate1 !=="" )? <OtherExp1 company1={company1} experienceStartDate1={experienceStartDate1} experienceEndDate1={experienceEndDate1} experienceDescription1={experienceDescription1}/>:""}
         { (experienceStartDate2 !=="" )? <OtherExp2 company2={company2} experienceStartDate2={experienceStartDate2} experienceEndDate2={experienceEndDate2} experienceDescription2={experienceDescription2}/>:""}

          
        </div>
      </div>
      <div className="section">
     
        <h3 className={`section__title text-${color} my-2`}><b>Education</b></h3>
        <div className="section__list">
          <div className="section__list-item my-1">
            <div className="left">
              <div className="name"><b>{college}</b></div>
              <div className="duration">{formationStartDate} | {formationEndDate}</div>
              <div className="addr">{formationDescription}</div>
            </div>
          </div>
          {formationStartDate1!==""?<OtherFrm1 college1={college1} formationStartDate1={formationStartDate1} formationEndDate1={formationEndDate1} formationDescription1={formationDescription1}/>:""}
          {formationStartDate2!==""?<OtherFrm2 college2={college2} formationStartDate2={formationStartDate2} formationEndDate2={formationEndDate2} formationDescription2={formationDescription2}/>:""}
        </div>
      </div>
      <div className="section">
      <h3 className={`section__title text-${color} my-2`}><b>Projects</b></h3>
        <div className="section__list">
          <div className="section__list-item">
            <div className="name"><b>{project}</b></div>
            <div className="text">
              {projectDesc}
            </div>
          </div>
          {project1 ? <OtherProject1 project1={project1} projectDesc1={projectDesc1}/> : ""}
          {project2 ? <OtherProject2 project2={project2} projectDesc2={projectDesc2}/> : ""}
        </div>
      </div>
      <div className="section">
      <h3 className={`section__title text-${color} my-2`}><b>Skills</b></h3>
        <div className="skills">
         {skills} , {skills1} , {skills2}, {skills3}, {skills4}   
        </div>
      </div>
      <div className="section">
      <h3 className={`section__title text-${color} my-2`}><b>Intrests</b></h3>
        <div className="section__list">
          <div className="section__list-item">{intrests}</div>
        </div>
      </div>
    </div>
  </div></div>
<div className="my-5 mx-auto">
  <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        /></div>
</div>

)}

export default Resume;
