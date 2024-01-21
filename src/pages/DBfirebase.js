import React from 'react'

import { getDatabase, ref, set } from "firebase/database";
import { app } from '../firebase';

  const db = getDatabase(app);
  

function DBfirebase() {

const addData = () =>{
    set(ref(db, 'users/liaqat' ), {
        username: "liaqat ali (developer)",
        email: "liaqat@gmail.com",
        age : "22"
      });
}
  return (
    <>
      <h1>Add data to firebase</h1>
      <button onClick={addData} className='btn btn-success'>Click to add</button>
    </>
  )
}

export default DBfirebase
