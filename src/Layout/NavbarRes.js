import React from 'react'
import { NavLink } from 'react-router-dom'
import { useFireAuth } from '../context/fireAuthContext'

function NavbarRes() {
  const fireChook = useFireAuth()
  const handlelogOut =  () =>{
fireChook.logOut()
  }
  return (
    <> 
<div>
  {/* Button trigger modal */}
  <button type="button"  style={{background:"transparent" ,border:"none"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
  <i className="fa-solid fa-bars-staggered fa-4x p-2" />
  </button>
  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className=" modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="text-center p-3">
          <i type="button" className="fa-solid fa-xmark fa-3x" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className='row navresrow'>
            <div className='col-md-3 navresrow'>
            <NavLink className="crud " aria-current="page" to = "/">Home</NavLink>
            </div>
            <div className='col-md-3 navresrow'>
            <NavLink className="crud " aria-current="page" to = "/list">Add Data</NavLink>
            </div>
            {fireChook.checkAuth?  (
               <div className='col-md-3 navresrow'>
               <NavLink className="crud " aria-current="page" to = "/login" onClick={handlelogOut}>Logout</NavLink>
               </div>
            ):(<>
             <div className='col-md-3 navresrow'>
            <NavLink className="crud " aria-current="page" to = "/login">Login</NavLink>
            </div>
             <div className='col-md-3 navresrow'>
            <NavLink className="crud " aria-current="page" to = "/register">Register</NavLink>
            </div>
            </>)}
           
           
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default NavbarRes
