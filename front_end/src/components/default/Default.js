import React from 'react'
import "./Default.css"
import DefaultImage from "../images/DefaultImage.jpg";
import Logo from "../images/Logo.jpg"
import { NavLink, Route, Routes } from "react-router-dom";

function Default() {
  return (
    <div className='main'>
      {/* Nav bar */}
      <nav className = "nav-style navbar navbar-expand-sm bg-opacity-25 main-navbar">
        <div className = "container-fluid">
      
          <a href='/'>
            <img src={Logo} className = "mr-4" width="70px" height="55px" alt="logo" />
          </a>

          <div className='ml-5'>
            <h2 className='fw-bold display-6'>Authority Partners & Co.</h2>
          </div>
        
          <div >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <NavLink className="nav-styles nav-link fw-bold text-white" to="/login">
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-styles nav-link fw-bold text-white" to="/registration">
                  Registration
                </NavLink>
              </li>
               {/* <li className="nav-item">
                <NavLink className="nav-styles nav-link fw-bold text-white" to="/home">
                  Home
                </NavLink>
              </li>    */}
           </ul>
          </div>
        </div>
      </nav> 




        <div className='div1'>
          <p className='display-6 fw-bold'>Better Solutions for your Business</p>
          <h3 className='p1'> Build your dream website with Us.</h3>
          <p> We are a team of 3, building websites using React</p>
        </div>
        <div className='div2'>
          <img src={DefaultImage} className = "img" height="300px" alt="Default"></img>
        </div>
    </div>
  )
}

export default Default