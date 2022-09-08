import React from 'react'
import {Navigate} from 'react-router-dom'
import { useUserAuth } from '../context/UserContextAuth'

const ProtectedRoute = ({children}) => {
    const {user}=useUserAuth();
    if(!user){
        return <Navigate to ="/login"/>;
    }
    return children;
  return (
    <div>
      
    </div>
  )
}

export default ProtectedRoute
