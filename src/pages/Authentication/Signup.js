import React, { useEffect, useState } from 'react'
// use signInWithEmailAndPassword instead of createUserWithEmailAndPassword for login/signin
import AuthParent from './AuthParent';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFireAuth } from '../../context/fireAuthContext';
import { message } from 'antd';


function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const navigate = useNavigate()

    const firebaseHook = useFireAuth()

const handleSubmit = async(e) => {
e.preventDefault()
try {
    await firebaseHook.register(email ,password )
navigate("/login")
} catch (error) {
  message.error("user already exist")

}
}
useEffect(()=>{ 
  if (firebaseHook.checkAuth) {
navigate("/")
  }
},[firebaseHook,navigate])
  return (
    <>
        <AuthParent>
        <h1 className='crud'>Signup form</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" value={name} id="exampleInputEmail11" aria-describedby="emailHelp" placeholder='name' onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address' onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" value={password} id="exampleInputPassword1" placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" value={phone} id="phone" placeholder='phone' onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" value={address} id="address" placeholder='address' onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className='text-center mb-3 '>

        <button type="submit" className='btn btn-primary formbtn font2rem mt-3' >Signup</button>
        </div>
        
        <div className='text-center'>

        <NavLink   to = "/login" className="font2rem ">Already have account</NavLink>
        </div>
      </form>
        </AuthParent>
       

    </>
  )
}

export default Signup
