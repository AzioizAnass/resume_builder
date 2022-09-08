import React from 'react'
import {Navigate} from 'react-router-dom'
import { useUserAuth } from '../context/UserContextAuth'

const ProtectedRouteOut = ({children}) => {
    const {user}=useUserAuth();

    if(user){
        return <Navigate to ="/newCV"/>;
    }
    return children;
  return (
    <div>
      
    </div>
  )
}

export default ProtectedRouteOut
