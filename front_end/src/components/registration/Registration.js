import { useForm } from "react-hook-form";
import React from 'react'
import "./registration.css";
import { useNavigate, Route, Routes, NavLink } from "react-router-dom";
import Login from "../login/Login";
import Logo from "../images/Logo.jpg"

function Registration() {

    let navigate = useNavigate();

    let { register, handleSubmit, formState: {errors}} = useForm();

    let formSubmit = (userObj) =>{
        console.log(userObj)
        if(Object.keys(errors).length === 0){
            navigate("/login");
        }
    }

  return (
    <>

    {/* Navbar */}
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

    
        
      
        <div className="display-5 text-center text-info mb-5"></div>
        <form className="form mx-auto mb-5 reg-form bg-opacity-25 " onSubmit={handleSubmit(formSubmit)}>
            {/* username */}
            <div className="mb-3">
                <label htmlFor="username" className="form-label fw-bold">Username</label>
                <input type = "text" id="username" placeholder = "Enter Username" className="form-control" {...register("username", {required: true, minLength: 4})} />
                {/* validation of error message*/}
                {errors.username?.type == "required" && <p className="text-danger">Username is required</p>}
                {errors.username?.type == "minLength" && <p className="text-danger">Min Length should be 4</p>}
            </div>

            {/* password */}
            <div className="mb-3">
                <label htmlFor="password" className="form-label fw-bold">Password</label>
                <input type = "password" id="password" placeholder = "Enter Password" className="form-control" {...register("password", {required: true, minLength: 8})} />
                {/* Validation of date of birth*/}
                {errors.username?.type == "required" && <p className="text-danger">Password is required</p>}
                {errors.username?.type == "minLength" && <p className="text-danger">Min Length should be 8</p>}
            </div>

            {/* date of birth */}
            <div className="mb-3">
                <label htmlFor="dob" className="form-label fw-bold">Date of Birth</label>
                <input type = "date" id="dob" placeholder = "Enter Date-of-Birth" className="form-control" {...register("dob", {required: true})} />
                {/* Validation of date of birth*/}
                {errors.dob?.type == "required" && <p className="text-danger">DOB is required</p>}
            </div>

            {/* E-Mail */}
            <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">E-mail</label>
                <input type = "email" id="email" placeholder = "Enter E-mail id" className="form-control" {...register("e-mail", {required: true})} />
                {/* Validation of date of birth*/}
                {errors.dob?.type == "required" && <p className="text-danger">E-mail is required</p>}
            </div>

            <div className="reg-button">
            {/* submit button*/}
            <button type = "submit" className="signup-button">SignUp</button>
            </div>

        </form>

        <Routes>
            <Route path = "/login" element = {<Login />} />
        </Routes>
    </>

  )
}

export default Registration;