import './App.css';
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
// importing routes
import Login from "./components/login/Login";
import Registration  from "./components/registration/Registration";
import Default from './components/default/Default';
import Home from "./components/home/Home";
import Logo from "./components/images/Logo.jpg";
import Edit from "./components/edit/Edit";


function App() {

  return(
  <>
    <div className='main'>
      {/* Nav bar
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
{/* 
               <li className="nav-item">
                <NavLink className="nav-styles nav-link fw-bold text-white" to="/home">
                  Home
                </NavLink>
              </li>   */}
            {/* </ul>
          </div>
        </div>
      </nav> */} 

      {/* Configure routes */}

      <Routes>
        <Route path='/' element = {<Default />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/registration' element = {<Registration />} />
        <Route path='/home' element = {<Home />} />
        <Route path = "/edit/:id" element = {<Edit />} />
      </Routes> 



      {/* footer */}
      <footer className="mt-auto bg-dark bg-opacity-25 text-white">
        <div className="fw-bold text-dark text-center py-3">
          Team 1C @Cognizant|Privacy Policy|Terms and Conditions
        </div>
      </footer>
  </div>
</>
  );
}



export default App;