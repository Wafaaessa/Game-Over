import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout({userData,logOut}) {
  return (
    <div>
        <Navbar logOut={logOut} userData={userData}/>
       
        <Outlet></Outlet>
       
        {/* <Footer/> */}
    </div>
  )
}
