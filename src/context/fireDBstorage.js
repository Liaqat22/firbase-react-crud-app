import React,{ useContext,createContext } from 'react'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore'
import { app } from '../firebase'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { useFireAuth } from './fireAuthContext'

const fireStore = getFirestore(app)
const storage = getStorage(app)

const FireDbStorage = createContext()

function FireDBstorageProvider({children}) {
    const user = useFireAuth()
    const currUser = user.User

   // create user
    const createUser = async(userData)=>{
        const photoRef =  ref(storage , `user/photos/${userData.photo.name}`)
       const uploadimg =  await uploadBytes(photoRef , userData.photo) //upload img to storage
       const imgURL = await getDownloadURL(photoRef) //dwnlod img from storage

        return await addDoc(collection(fireStore , "USERS"),{
            name : userData.name,
            age : userData.age,
            profession : userData.profession, 
            photo : imgURL,
            imageURL : uploadimg.ref.fullPath,
            userEmail : currUser.email,
            userId : currUser.uid
        })
    }
    
    // //getting all users
    const getUsers = async(id)=>{
      const collectionRef = collection(fireStore,"USERS")
      const querydata =  query(collectionRef , where("userId", "==" , id))
     return  await getDocs(querydata)
    }
    // get user by id
    const getUserById = async(id) =>{
        return await getDoc(doc(fireStore , "USERS" , id))
    }
    //edit user 
    const Edituser = async(id,userData)=>{
       const update =    doc(fireStore,"USERS" ,id)
       return  updateDoc(update,userData)
    }
    //upload image 
    const uploadimg =async(photo)=>{
        const photoRef =  ref(storage , `user/photos/${photo.name}`)
          uploadBytes(photoRef , photo) //upload img to storage
        return  getDownloadURL(photoRef) 
    }
    
    // delete user
    const deleteUser = async(id)=>{
      return await deleteDoc(doc(fireStore,"USERS", id))
    }
 

  return (
    <>
      <FireDbStorage.Provider value={{
        createUser,
        getUsers,
        getUserById,
        Edituser,
        uploadimg,
        deleteUser
      }}>{children}</FireDbStorage.Provider>
    </>
  )
}
const useFireStore = () => useContext(FireDbStorage)
export  {FireDBstorageProvider , FireDbStorage , useFireStore}
