import React from 'react'
import Login from '../Login/Login';

export default function ProtectedRoute({userData, children,saveData}) {
 if(userData ===null){
   return <Login saveData={saveData}/>

 }
 else{
   return children;
 }
}
