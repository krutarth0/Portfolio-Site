import React,{useEffect,useState} from 'react'
import {auth} from "./firebase_config"

export default function useAuth(action) {


    useEffect(() => {
        
        auth()
        .signInWithEmailAndPassword(action.email, action.pass)
        .catch((error) => {
          console.log ("Error signing in with password and email!");
        //   console.error("Error signing in with password and email", error);
          
        });



        return () => {
            
        }
    }, [action])

    return 0;
}
