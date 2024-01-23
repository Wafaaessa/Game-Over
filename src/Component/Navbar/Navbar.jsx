import React from 'react'
import { Link } from 'react-router-dom'
import im1 from '../../../src/logo.png'

export default function Navbar({userData,logOut}) {
  return (
    <div>
  <nav className="navbar navbar-expand-lg p-3 ps-5 mt-3">
  <div className="container-fluid">
    <div className="logo w-25">
    <img src={im1} className='w-25 ' alt="LOG CABIN" />
    <Link className="navbar-brand text-white" to="#">Game Over</Link>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {userData?       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/games/all">All</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Platform
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={`/games/platforms/pc`}>Pc</Link></li>
            <li><Link className="dropdown-item" to={`/games/platforms/browser`}>browser</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort-by
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={`/games/sorted/release-date`}>release-date</Link></li>
            <li><Link className="dropdown-item" to={`/games/sorted/popularity`}>popularity</Link></li>
            <li><Link className="dropdown-item" to={`/games/sorted/alphabetical`}>alphabetical</Link></li>
            <li><Link className="dropdown-item" to={`/games/sorted/relevance`}>relevance</Link></li>
         

            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={`/games/category/racing`}>racing</Link></li>
            <li><Link className="dropdown-item" to={`/games/category/sports`}>sports</Link></li>
            <li><Link className="dropdown-item" to={`/games/category/social`}>social</Link></li>
            <li><Link className="dropdown-item" to={`/games/category/shooter`}>shooter</Link></li>
            <li><Link className="dropdown-item" to={`/games/category/open-world`}>open-world</Link></li>
            <li><Link className="dropdown-item" to={`/games/category/zombie`}>zombie</Link></li>
            <li><Link className="dropdown-item" to={`/games/category/fantasy`}>fantasy</Link></li>
            <li><Link className="dropdown-item" to={`/games/category/action-rpg`}>action-rpg</Link></li>
            <li><Link className="dropdown-item" to={`/games/category/action`}>action</Link></li>
            <li><Link className="dropdown-item" to={`/games/category/flight`}>flight</Link></li>
            <li><Link className="dropdown-item" to={`/games/category/battle-royale`}>battle-royale</Link></li>

          </ul>
        </li>
      </ul>:''}

      <ul className="navbar-nav ms-auto  pe-5 mb-2 mb-lg-0">

{userData?<>
<li className="nav-item">
  <span className="nav-link out" aria-current="page" onClick={logOut}>LogOut</span>
</li>
</>: <>  <li className="nav-item mx-3">
  <Link className="nav-link  " aria-current="page" to="login">Login</Link>
</li>
<li className="nav-item mx-3">
  <Link className="nav-link px-2" aria-current="page" id='join' to="">Join Free</Link>
</li></>}
</ul>
    </div>
  </div>
</nav>
    </div>
  )
}
