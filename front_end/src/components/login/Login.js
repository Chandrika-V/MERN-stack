import { useForm } from "react-hook-form";
import React from 'react';
import "./Login.css";
import { useNavigate, Route, Routes, Navigate, NavLink } from "react-router-dom";
import Home from "../home/Home";
import Logo from "../images/Logo.jpg"



function Login() {

    let navigate = useNavigate();
 
    let { register, handleSubmit, formState: {errors}} = useForm();

    let formSubmit = (userObj) =>{
        console.log(userObj)
        if(Object.keys(errors).length === 0){
            navigate("/home");
        }
    }


  return (
    <>
    <div className="body">

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



        <div className="form-body">
        <form className="form mx-auto mb-4 reg-form" onSubmit={handleSubmit(formSubmit)}>
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
                {/* Validation of password*/}
                {errors.username?.type == "required" && <p className="text-danger">Password is required</p>}
                {errors.username?.type == "minLength" && <p className="text-danger">Min Length should be 8</p>}
            </div>

            <div className="loginbtn">
                 {/* submit button*/}
                <button type = "submit"  className="loginbutton fw-bold">Login</button>
            </div>

            <div>
                <p className="mt-3">Don't have an account ?  
                    <a href="/registration" className="fw-bold"> Register Here </a>
                </p>
            </div>

        </form>
    </div> 

    <Routes>
        <Route path = "/home" element = {<Home />} />
    </Routes>

    </div>

    </>
  )
}

export default Login;