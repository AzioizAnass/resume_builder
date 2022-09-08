import {configureStore} from '@reduxjs/toolkit'
import connectionReducer from './features/user'

export const store = configureStore({
  reducer :{
    connectionToggle:connectionReducer
  } 
    
})
