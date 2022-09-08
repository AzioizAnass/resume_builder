import { createContext, useContext, useState,useEffect } from "react";
import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
 } from "firebase/auth";
 import { auth } from "../components/firebase-config";

const userAuthContext = createContext();

export function UserAuthContextProvider({children}){
    const [user,setUser]= useState();

    const signUp =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const login =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)  
    }
    const logout =()=>{
        return signOut(auth);
    }
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }

    },[])






    return (
        <userAuthContext.Provider value={{signUp,login,user,logout}}>
            {children}
        </userAuthContext.Provider>
    )
}
 export function useUserAuth(){
    return useContext(userAuthContext);
} 