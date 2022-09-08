import React from 'react'
import {createSlice} from "@reduxjs/toolkit"

export const connectionSlice = createSlice( {
  name:"connection",
  initialState:{value:{toggleConnection:"slm"}},
  reducers:{inverseToggle:(state,action)=>{state.value=action.payload}}
})

export const {inverseToggle} = connectionSlice.reducer 
export default connectionSlice.reducer 

