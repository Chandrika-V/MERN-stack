import React from 'react'
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Route, Routes, NavLink } from "react-router-dom";
import Home from "../home/Home"
import Logo from "../images/Logo.jpg";



function Edit() {

    let params = useParams();
    
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            let response = await axios.get("http://localhost:4000/user/getuser/"+params.id)
           // console.log("Response is: ",response)
           setData(response.data.payload)
        }

        fetchData();

    }, [])


    // const handleChange = (e) => {
    //     let {name, type, value} = e.target;
    //     setData({ ...data, [name]: value });
        
    // };  

    let navigate = useNavigate();

    let { register, handleSubmit, formState:{errors} } = useForm();


    let formSubmit = async(userObj) => {
        console.log(userObj)
        userObj.UserId = (+userObj.UserId);
        userObj.Age = (+userObj.Age);
        userObj.PhoneNo = (+userObj.PhoneNo)

        let res = await axios.put("http://localhost:4000/user/update-user/"+params.id,userObj)
        console.log(res);

        if(Object.keys(errors).length === 0){
            alert("User Details edited successfully.")
            navigate("/home")
        }
    }

    
    
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
              <NavLink className="nav-link fw-bold text-dark" aria-current="page" to="/home" >
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



    <div className="body">
        <div className='text-center'>
            <h1 className='fw-bold text-dark mt-5 pb-3'>Edit User</h1>
        </div>
        {/* <div className="form-body"> */}
        <form className="form mx-auto mb-5 reg-form" onSubmit={handleSubmit(formSubmit)}>
            {/* userid */}
            <div className="mb-3">
                <label htmlFor="userid" className="form-label fw-bold">UserId</label>
                <input type = "text" 
                    name='userid' 
                    id="userid" 
                    placeholder = "Enter Userid" 
                    defaultValue={data.Userid} 
                    className="form-control" 
                    //onChange={handleChange} 
                    {...register("UserId",{required:true})}>
                </input>
                {errors.userid?.type==='required' && <p className='text-danger fw-bold'>UserId is required</p>}
            </div>

            {/* userfullname */}
            <div className="mb-3">
                <label htmlFor="userfullname" className="form-label fw-bold">User Fullname</label>
                <input type = "text" 
                    name='userfullname' 
                    id="userfullname"  
                    placeholder = "Enter User Fullname" 
                    defaultValue={data.userfullname} 
                    className="form-control" 
                    //onChange={handleChange}
                    {...register("userfullname",{required:true})}></input>
                    {errors.userfullname?.type==='required' && <p className='text-danger fw-bold'>UserfullName is required</p>}
            </div>

            {/* Age */}
            <div className="mb-3">
                <label htmlFor="age" className="form-label fw-bold">Age</label>
                <input type = "number" 
                    name='age' 
                    id="age"  
                    placeholder = "Enter Age" 
                    defaultValue={data.Age} 
                    className="form-control" 
                    //onChange={handleChange} 
                    {...register("Age",{required:true})}>
                </input>
                {errors.age?.type==='required' && <p className='text-danger fw-bold'>Age is required</p>}
                
            </div>

            
            {/* Location */}
            <div className="mb-3">
                <label htmlFor="location" className="form-label fw-bold">Location</label>
                <input type = "text" 
                    name='location' 
                    id="location"  
                    placeholder = "Enter Location" 
                    defaultValue={data.Location} 
                    className="form-control" 
                    //onChange={handleChange} 
                    {...register("Location",{required:true})}></input>
                    {errors.location?.type==='required' && <p className='text-danger fw-bold'>Location is required</p>}
            </div>

            {/* E-mail */}
            <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">E-mail</label>
                <input type = "email" 
                    name='email' 
                    id="email"  
                    placeholder = "Enter Location" 
                    defaultValue={data.emial} 
                    className="form-control"  
                    //onChange={handleChange}
                    {...register("emial",{required:true})}>
                </input>
                {errors.email?.type==='required' && <p className='text-danger fw-bold'>E-mail is required</p>}
            </div>

            {/* Phone Number */}
            <div className="mb-3">
                <label htmlFor="phonenumber" className="form-label fw-bold">Phone Number</label>
                <input type = "phonenumber" 
                    name='phonenumber' 
                    id="phonenumber"  
                    placeholder = "Enter Number" 
                    defaultValue={data.PhoneNo} 
                    className="form-control" 
                    //onChange={handleChange} 
                    {...register("PhoneNo",{required:true})}></input>
                    {errors.phonenumber?.type==='required' && <p className='text-danger fw-bold'>PhoneNumber is required</p>}
            </div>

            <div className="text-center">
                 {/* submit button*/}
                <button type = "submit" className="loginbutton fw-bold">Edit</button>
            </div>

        </form>
    {/* </div>  */}
    </div>

    <Routes>
        <Route path = "/home" element = {<Home />} />
    </Routes>
    
    </>
  )
}

export default Edit;