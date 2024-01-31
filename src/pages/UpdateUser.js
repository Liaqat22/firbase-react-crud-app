import React,{ useState ,useEffect } from 'react'
import AuthParent from './Authentication/AuthParent'
import { useFireStore } from '../context/fireDBstorage'
import {useParams,useNavigate} from "react-router-dom"
import { message } from 'antd'


function UpdateUser() {
    const [userData, setUserData] = useState({
      name: "",
      age: "",
      profession: "",
      photo: null,
      selected : null
    });
  
    const navigate = useNavigate();
    const { id } = useParams();
    const fireStorageHook = useFireStore();
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await fireStorageHook.getUserById(id);
            setUserData({
              ...userData,
              name: data?.data()?.name,
              age: data?.data()?.age,
              profession: data?.data()?.profession,
              photo: data?.data()?.photo,
            });
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
        // eslint-disable-next-line
      }, [id]);

          
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          if (userData.selected) {
            console.log("if")
         const url = await fireStorageHook.uploadimg(userData.selected);
          await fireStorageHook.Edituser(id,{
            name : userData.name,
            age : userData.age,
            profession : userData.profession,
            photo : url 
          });
          setUserData({
            ...userData,
            photo: url,
        });
        } else{
          console.log("else")
          await fireStorageHook.Edituser(id,userData);
        }
    
            navigate("/");
            message.success("User updated successfully");
        } catch (error) {
            message.error("Failed to update user");
            console.error("Error updating user:", error);
        }
    };
    
      
  
 
  
    // Use useEffect to monitor changes in userData.photo
    useEffect(() => {
      // Access the updated photo value here and perform any necessary logic
      console.log(userData.photo, "Updated photo");
    }, [userData.photo]);

  return (
    <>
       <AuthParent>
       <h1 className='crud'>EDIT</h1>

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
       <input className="form-control" type="file" id="formFile" onChange={(e) => setUserData({ ...userData, selected: e.target.files[0] })} />
       {userData.selected? (
        <img src={URL.createObjectURL(userData.selected)} alt=''style={{borderRadius: 'unset',    objectFit: "unset" }} className='profile-img mt-3'/>

       ):(
<img src={userData.photo} alt=''style={{ borderRadius: 'unset',    objectFit: "unset" }} className='profile-img mt-3'/>

       )}
</div>

        <button type="submit" className='btn btn-primary  formbtn font2rem'>submit</button>
        
      </form>
      </AuthParent>
    </>
  )
}

export default UpdateUser
