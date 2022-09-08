import React from 'react'
import { Home } from '@mui/icons-material';
import useStyles from '../../Styles/NavBarStyles';
import '../../static/css/navbar.css';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
import {store} from "../store"
import {onAuthStateChanged} from "firebase/auth"
import {auth} from '../firebase-config'
import {useState} from 'react'
import { useUserAuth } from '../../context/UserContextAuth';

const Navbar = () => {
  const {user} = useUserAuth();
  //const ResumeImage = 
  const classes = useStyles();
 
  return (
  
  <nav className="navbar navbar-expand-lg  py-3 border-bottom border-dark "  >
  <div className="container">
    {user?
    <img src={require('../../static/images/icons8-download-resume-80.png')} style={{width:"60px" , height:"50px"}}/>
    :
    <Link to ="/">
    <img src={require('../../static/images/icons8-download-resume-80.png')} style={{width:"60px" , height:"50px"}}/>
    </Link>
    }

      {user?<SignedInLinks/>:<SignedOutLinks/>}

  
 
  </div>
</nav>

  
    
  )
}

export default Navbar
