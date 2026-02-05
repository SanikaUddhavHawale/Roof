import React from 'react'
import logo1 from './Images-Videos/logo1.png'
import './CSS/Header.css'
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <>

<nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top bg-body-tertiary">
  <div className="container-fluid">
<div className="logo">
            <img src={logo1} alt="" />
        </div>
   
   
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
<li className="nav-item dropdown">
  <Link
    className="nav-link dropdown-toggle"
    to="/"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Location
  </Link>

  <ul className="dropdown-menu">
    <li>
      <Link className="dropdown-item" to="/">Goa</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/">Lonavala</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/">Alibaug</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/">Udaipur</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/">Jaipur</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/">Manali</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/">Shimla</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/">Mussoorie</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/">Coorg</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/">Wayanad</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/">Ooty</Link>
    </li>
    <li>
      <Link className="dropdown-item" to="/">Rishikesh</Link>
    </li>
  </ul>
</li>

         <li className="nav-item">
          <Link to="/Stays" className="nav-link" aria-disabled="true">Stays/ Property</Link>
        </li>


        <li className="nav-item dropdown">
  <Link
    className="nav-link dropdown-toggle"
    to="/"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
   Collections
  </Link>

  <ul className="dropdown-menu">
    {/* Collections / Filters */}
    <li><Link className="dropdown-item" to="/">Luma Villas</Link></li>
    <li><Link className="dropdown-item" to="/">Infinity Pool</Link></li>
    <li><Link className="dropdown-item" to="/">1 Bedroom Offerings</Link></li>
    <li><Link className="dropdown-item" to="/">Pet-friendly</Link></li>
    <li><Link className="dropdown-item" to="/">Off-beat Getaway</Link></li>
    <li><Link className="dropdown-item" to="/">Event-friendly</Link></li>
    <li><Link className="dropdown-item" to="/">Wellness Retreats</Link></li>
    <li><Link className="dropdown-item" to="/">Senior Citizen-Friendly</Link></li>
    <li><Link className="dropdown-item" to="/">Sacri Borod Collection</Link></li>
  </ul>
</li>

 <li className="nav-item">
          <Link to="/Experiences" className="nav-link" aria-disabled="true">Experiences and Events</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" aria-disabled="true">Contact US</Link>
        </li>
      </ul>
      </div>



      <div className="login">
           <button><i className="bi bi-person-fill"></i><p>Login/ SignUp</p></button> 
        </div>
    

  </div>
</nav>


    </>
  )
}
