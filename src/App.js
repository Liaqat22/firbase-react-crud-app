import './App.css';
import Signup from './pages/Authentication/Signup';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Authentication/Login';
import Layout from './Layout/Layout';
import Userform from './pages/Userform';
import AllUsers from './pages/AllUsers';
import UpdateUser from './pages/UpdateUser';




function App() {
  return (
    <>
      <Layout>

        <Routes>
          <Route path='/' element={<AllUsers />} />
          <Route path='/list' element={<Userform />} />
          <Route path='/updateuser/:id' element={<UpdateUser />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
