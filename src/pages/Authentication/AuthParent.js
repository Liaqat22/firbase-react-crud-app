import React from 'react'

function AuthParent({children}) {
  return (
    <>
       <div className = "container-fluid ">
      <div className='row d-flex justify-content-center'>
        <div className = "col-md-5">
            <main>

{children}
            </main>
        </div>
        </div>
        </div>

    </>
  )
}

export default AuthParent
