import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate, Route, Routes, Link, NavLink } from "react-router-dom";
import Edit from "../edit/Edit";
import Logo from "../images/Logo.jpg";

function Home() {

  let navigate = useNavigate();

  const [d, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/user/getusers")
    .then(
    response => setData(response.data.payload)
   )
   .catch()
  })


  // let goToEdit = () => {
  //   console.log()
  //   navigate("/edit")
  // }

  return (
    <>
      {/* Nav bar */}

      <nav className = "navbar navbar-expand-sm bg-info bg-opacity-25 navbar-dark main-navbar">
      <div className = "container-fluid">
        
          <a href='/'>
            <img src={Logo} className = "mr-4" width="70px" height="55px" alt="logo" />
          </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <NavLink className="nav-link fw-bold text-dark" aria-current="page" to="/homepage" >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fw-bold text-dark" aria-current="page" to = "/contactus">
                 Contact Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fw-bold text-dark" aria-current="page" to="/aboutus">
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fw-bold text-dark" to="/users">
                Users
              </NavLink>
            </li>

            
            <li className="nav-item">
              <NavLink className="nav-link fw-bold text-dark" to="/logout">
                Logout
              </NavLink>
            </li>

          </ul>
          
          

        </div>
      </div>
    </nav>

    <div className='text-center my-auto'>
        <h1 className='fw-bold text-dark mt-5 pb-3'>List of Users</h1>
    </div>

     <div className='container mt-5 mb-5'>
      <center>
      <table className='d-table table table-striped table-condensed table-bordered table-hover table-responsive'>
        <thead className='bg-info text-dark fw-bold pt-5'>
          <tr className='text-center'>
            <th scope="col">Userid</th>
            <th scope="col">Username</th>
            <th scope="col">Age</th>
            <th scope="col">Location</th>
            <th scope="col">E-mail</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
        {
          d.map( (item) => 
            <tr key={item.Userid} className = "fw-bold text-center table-striped">
              <td>{item.Userid}</td>
              <td>{item.userfullname}</td>
              <td>{item.Age}</td>
              <td>{item.Location}</td>
              <td>{item.emial}</td>
              <td>{item.PhoneNo}</td>
              <td>
              {/* <button onClick = {() => goToEdit()}>Edit</button> */} 
              <Link to = {"/edit/"+item.Userid}>
                <button className='bg-info bg-opacity-50 text-dark fw-bold'>
                  Edit
                </button>
              </Link>
              </td>
            </tr>
          )
        }
        </tbody>
      </table>   
      </center> 
    </div>

     {/* <Routes>
      <Route path = "/edit/:id" element = {<Edit />} />
    </Routes>  */}

    </>
  )
}

export default Home;