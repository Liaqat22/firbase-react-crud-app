import React from 'react'
import { NavLink } from 'react-router-dom'
import { useFireAuth } from '../context/fireAuthContext'
import NavbarRes from './NavbarRes'
import img from "../imges/icons8-firebase-a-google's-mobile-platform-that-helps-you-quickly-develop-high-quality-apps-96.png"

function Header() {
  const fireChook = useFireAuth()
  const handlelogOut =  () =>{
fireChook.logOut()
  }
  return (
    <>

        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <NavLink className="navbar-brand" to="#" style={{border : "none"}}><b >
   <img src = {img} className='navimg' alt='logo'/> firebase crud app </b></NavLink>
            <div className='ms-auto navres'>
   
    <NavbarRes/>
    </div>

    

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to = "/">Home</NavLink>
        </li>
        {fireChook.checkAuth?  (
 <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to = "/login" onClick={handlelogOut}>Logout</NavLink>
        </li>
        ):(
        <>
         <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to = "/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to = "/register">Register</NavLink>
        </li>
        </>) 

       
        }
       
       
      </ul>
    </div>
</nav>

    </>
  )
}

export default Header
