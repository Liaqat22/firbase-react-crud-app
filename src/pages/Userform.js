import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFireStore } from '../context/fireDBstorage'
import { message } from 'antd'
import AuthParent from './Authentication/AuthParent'
import { useFireAuth } from '../context/fireAuthContext'


function Userform() {
  
    const [userData , setUserData] = useState({
        name : "",
        age : "",
        profession : "",
        photo : null
    })
    const navigate = useNavigate()
    const fireStorageHook = useFireStore()
    const fireAuth = useFireAuth()

    const handleSubmit = (e) =>{
        e.preventDefault()
        try {
if (fireAuth.checkAuth) {
            fireStorageHook.createUser(userData)
            message.success("user created successfully")
            console.log(userData.photo)
            navigate("/")
}else{
            message.warning("please login to get access")
            navigate("/login")

}
        } catch (error) {
            message.error("failed to create user")
            console.log(error , "failed to create user")
        }
    }

  return (
    <>
       <AuthParent>
        <h1 className='crud'>CREATE</h1>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
        <input type="text" className="form-control" value={userData.name} placeholder='name' onChange={(e) => setUserData({ ...userData, name: e.target.value })} required />
        </div>
       
        <div className="mb-3">
        <input type="text" className="form-control" value={userData.age} placeholder='age' onChange={(e) => setUserData({ ...userData, age: e.target.value })} required />
        </div>

        <div className="mb-3">
        <input type="text" className="form-control" value={userData.profession} placeholder='profession' onChange={(e) => setUserData({ ...userData, profession: e.target.value })} required />
        </div>

       <div className="mb-3">
       <input className="form-control" type="file" id="formFile" onChange={(e) => setUserData({ ...userData, photo: e.target.files[0] })} />
{userData.photo? (
  <img src={URL.createObjectURL(userData.photo)} alt=''style={{ borderRadius: 'unset',    objectFit: "contain" }} className='profile-img mt-3'/>

):("")}
</div>

        <button type="submit" className='btn btn-primary formbtn font2rem'>submit</button>
        
      </form>
      </AuthParent>
    </>
  )
}

export default Userform
