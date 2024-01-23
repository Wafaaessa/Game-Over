import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Layout from './Component/Layout/Layout';
import Login from './Component/Login/Login';
import All from './Component/All/All';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import Register from './Component/Register/Register';
import GameDetails from './Component/GameDetails/GameDetails';
import Platform from './Component/Platform/Platform';
import Sorted from './Component/Sorted/Sorted';
import Category from './Component/Category/Category';




function App() {
useEffect(()=>{
  if(localStorage.getItem('userToken')!==null){
    saveData();
  }
},[])
    const [userData, setUserData] = useState(null)
    function saveData() {
        let encoded =localStorage.getItem('userToken')
        let decoded=jwtDecode(encoded);
        // console.log(decoded);
        setUserData(decoded)
      }
  function logOut() {
  localStorage.removeItem('userToken');
  setUserData(null);
return <Navigate to='/login'/>

  }
 let routers=createBrowserRouter([
 {path:'/',element:<Layout userData={userData} logOut={logOut}/>,children:[
  {path:'home',element:<ProtectedRoute  saveData={saveData}userData={userData}><Home/></ProtectedRoute>},
  {path:'/games/all',element:<ProtectedRoute  saveData={saveData}userData={userData}><All/></ProtectedRoute>},
  // {path:'browser',element:<ProtectedRoute  saveData={saveData}userData={userData}><Browser/></ProtectedRoute>},
  {path:'gameDetails/:gameId',element:<ProtectedRoute saveData={saveData} userData={userData}><GameDetails/></ProtectedRoute>},  
  {path:'games/platforms/:app',element:<ProtectedRoute saveData={saveData} userData={userData}><Platform/></ProtectedRoute>},  
  {path:'games/sorted/:sort',element:<ProtectedRoute saveData={saveData} userData={userData}><Sorted/></ProtectedRoute>},  
  {path:'games/category/:categories',element:<ProtectedRoute saveData={saveData} userData={userData}><Category/></ProtectedRoute>},  
  {path:'login',element:<Login saveData={saveData}/>},
  {index:true,element:<Register/>},
 

 ]}
 ])

 return <>
<RouterProvider router={routers}/>
 </>
}

export default App;
