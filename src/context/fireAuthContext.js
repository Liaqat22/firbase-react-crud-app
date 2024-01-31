import React, { createContext, useContext, useEffect, useState } from 'react'
import { app } from '../firebase'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth' 
import { getDatabase, ref, set } from 'firebase/database' 


const auth = getAuth(app)
const database = getDatabase(app)
const googleprovider = new GoogleAuthProvider()

const FireAuth = createContext()

function FireAuthProvider({children}) {
    //Register
    const register  = async(email , password) =>{
       await createUserWithEmailAndPassword(auth , email,password)
    }

    //Login
    const login  = async(email , password) =>{
      await  signInWithEmailAndPassword(auth , email,password)
    }

    // check wether the user is logged in or not
   const [User , setUser] = useState(null)
   useEffect(()=>{
    onAuthStateChanged(auth , (user)=>{
        if (user) {
          setUser(user)
        }else{
          setUser(null)
        }
    })
   },[])
   const checkAuth = User ? true : false
   // login with google
const loginWithGoogle = () =>{
    signInWithPopup(auth , googleprovider)
}

// logout
const logOut =()=>{ signOut(auth)}

// real time database
const putData = (key, data) => {
  set(ref(database, key), data);
}
  return (
    <>
      <FireAuth.Provider value={{
        register,
        login,
        logOut,
        checkAuth,
        loginWithGoogle,
        User,
        putData
      }}>{children}</FireAuth.Provider>
    </>
  )
}
const useFireAuth = () => useContext(FireAuth)

export {FireAuthProvider,FireAuth,useFireAuth} 
