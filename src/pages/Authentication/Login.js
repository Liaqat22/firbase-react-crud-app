import React, { useEffect, useState } from 'react'
import AuthParent from './AuthParent'

import { NavLink, useNavigate } from 'react-router-dom';
import { useFireAuth } from '../../context/fireAuthContext';
import { message } from 'antd';
// import { useFirebase } from '../../context/firebaseContext';


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const firebaseHook = useFireAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await firebaseHook.login(email, password)
            navigate("/")
        } catch (error) {
            message.error("invalid username or password")
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
            <h1 className='crud'>Login form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="email" className="form-control" value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email : test@gmail.com' onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" value={password} id="exampleInputPassword1" placeholder='Password : 123456' onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className='text-center'>

                    <button type="submit" className='btn btn-primary font2rem formbtn mt-3'>Login</button>
                    </div>
                    <h1 className='text-center mt-4 crud'>OR</h1>

                </form>

                <div className='text-center'>
                <button className='btn btn-info font2rem mb-3 formbtn' onClick={firebaseHook.loginWithGoogle}>Login wth google</button><br/>
                <NavLink to="/register" className="font2rem " >Did not have account</NavLink>

                </div>
            </AuthParent>

        </>
    )
}

export default Login
