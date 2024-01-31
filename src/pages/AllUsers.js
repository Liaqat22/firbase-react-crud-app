import React, { useEffect, useState } from 'react'
import { useFireStore } from '../context/fireDBstorage'
import { NavLink } from "react-router-dom"
import { useFireAuth } from '../context/fireAuthContext'

function AllUsers() {
  const [allUsers, setAllUsers] = useState([])
  const fireHook = useFireStore()
  const fireAuth = useFireAuth()
  //All users
  const Users = async () => {
    try {

      const data = await fireHook.getUsers(fireAuth.User?.uid)
      setAllUsers(data.docs)

    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    Users()
  })

  // delete user
  const handleDel = async (id) => {
    await fireHook.deleteUser(id)
    Users()
  }
  return (
    <>
      {

      }
      <div className="container-fluid ">
        <div className='row d-flex justify-content-center'>
          <div className='col-md-11'>
            <div className='mb-2 p-2' style={{textAlign:"end" , color : "white"}}>
              <NavLink to= "/list" className="btn font2rem" style={{ backgroundColor : "#00b4d8"}}>
                <b style={{ color : "white"}}>+ Add Data</b>
                </NavLink>
            </div>
            {fireAuth.checkAuth ? (<>
              <table className="table  table-hover  table-secondary">
                <thead>
                  <tr>
                    <th><h6 className='thHome'>#</h6></th>
                    <th></th>
                    <th><h6 className='thHome'><b> Name</b></h6></th>
                    <th><h6 className='thHome'><b> Profession</b></h6></th>
                    <th><h6 className='thHome'><b> Age</b></h6></th>
                    <th><h6 className='thHome'><b> Action</b></h6></th>
                  </tr>
                </thead>
                {allUsers?.length > 0 ?
                  (allUsers.map((U, i) => (
                    <tbody>

                      <tr key={U.id}>
                        <td>{i + 1}</td>
                        <td><img src={U.data().photo} className='profile-img' alt='profile-img' /></td>
                        <td><h6 className='tdHome'>{U.data().name}</h6></td>
                        <td><h6 className='tdHome'>{U.data().profession}</h6></td>
                        <td><h6 className='tdHome'>{U.data().age}</h6></td>

                        <td>

                          <button className='btn btn-danger m-1 ' onClick={() => { handleDel(U.id) }}>
                            <i className="fa-solid fa-trash-can font2rem" />
                          </button>

                          <NavLink className='btn btn-warning ' to={`/updateuser/${U.id}`}>
                            <i className="fa-solid fa-pen font2rem" />
                          </NavLink>
                        </td>
                      </tr>
                    </tbody>
                  ))
                  
                  ) : (<>
                  <tr className='crud'><td></td>
                  <td></td>
                  <td></td>
                  <td> No Data to show</td>
                  <td></td>
                 </tr>
                  </>)
                }

              </table>
            </>) : (<>
              <h2 className='crud'>please <NavLink to="/login">login</NavLink> to see your data</h2>
              <div className='font2rem p-3' style={{color:"white"}}>
              <p>use given email and password to login</p>
                <p>email : test@gmail.com</p>
                <p>password : 123456</p>
              </div>
            </>)}

          </div>
        </div>
      </div>
    </>
  )
}

export default AllUsers
