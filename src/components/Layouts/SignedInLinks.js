import React from 'react'
import '../../static/css/signeInLinks.css';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../context/UserContextAuth';
import {useNavigate} from 'react-router-dom' 




const SignedInLinks = () => {
  // variables 
  const {logout} = useUserAuth();
  const navigate = useNavigate();


  //Logout function
  const logOut=async()=>{
    try{
    await(logout());
    navigate("/");
    }catch(error){

    }
  }
  return (
  <>
   <div className="collapse navbar-collapse " >
      <div className="navbar-nav ms-auto" > 
      <Link to ="/newCV" >
        <button className="btn btn-success ">
          <span class="glyphicon glyphicon-plus"></span>New Resume</button>
      </Link>
      <Link to ="/resumes" >
           <a className="nav-link ">My Resumes</a>
      </Link>
        </div>
      <Link to ="/Account">
        <a className='nav-link' >Account</a>
      </Link>
      <Link to ="/Logout">
          <a className='nav-link' onClick={logOut} >Logout</a>
      </Link>
      </div>
    
  </>
    
  )
}

export default SignedInLinks
