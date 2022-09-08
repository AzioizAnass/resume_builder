import React from 'react'
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { useUserAuth } from '../../context/UserContextAuth';
import { useEffect,useState} from 'react'
import {db} from "../firebase-config"
import { doc, getDoc } from "firebase/firestore";
import { Typography } from '@mui/material';


const Account = () => {
  
  const {user} = useUserAuth() 
  const [firstName , setFirstName] = useState(); 
  const [lastName , setLastName] = useState(); 


  const retrieveData= async () => {
    const docRef = doc(db, "Users",user.email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data().address);
      setFirstName(docSnap.data().firstName)
      setLastName(docSnap.data().lastName)
      
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
      } 
      useEffect(()=>{
        retrieveData()
      })

  return (
    
    <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-5 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">{firstName}{lastName}</span><span class="text-black-50">{user.email}</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">First Name</label><input type="text" class="form-control" placeholder={firstName} /></div>
                    <div class="col-md-6"><label class="labels">last Name</label><input type="text" class="form-control"  placeholder={lastName}/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" placeholder={user.email} value=""/></div>
                    <div class="col-md-12"><label class="labels">Password</label><input type="text" class="form-control" placeholder="Enter your password" value=""/></div>
                    <div class="col-md-12"><label class="labels">New Password</label><input type="text" class="form-control" placeholder="Enter your new password" value=""/></div>
                    <div class="col-md-12"><label class="labels">Confirm New Password</label><input type="text" class="form-control" placeholder="confirm new password" value=""/></div>
                    
                </div>
                
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        
    </div>
</div>
  )
}



export default Account
