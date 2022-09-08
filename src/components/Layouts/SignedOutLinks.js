import React from 'react'
import '../../static/css/signedOutLinks.css';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../../context/UserContextAuth';



const SignedOutLinks = () => {
  //variables:

  //Functions:
  return (
  <>
    <div className="collapse navbar-collapse " >
      <div className="navbar-nav ms-auto " > 
      <Link to ="/about"  >
      <a className="nav-link  " >About</a>
      </Link>
      <Link to ="/contact-us"  >
      <a className=" nav-link  " >Contact us </a>
      </Link>
      </div>
      <Link to ="/login"  >
      <a className=" nav-link  " >Login </a>
      </Link>
      <Link to="/signup" >
        <button className="btn btn-primary" type=" button">
          SignUp
        </button>
      </Link>
      
    </div>
  </>
    
  )
}

export default SignedOutLinks
