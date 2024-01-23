import Axios from 'axios';
import Joi from 'joi';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



export default function Register() {

  const [user, setUser] = useState({
    name:"",
    // last_name:"",
    email:"",
    password:"",
    age:"",
    phone:""
  })
  
 const[errorList,setErrorList]=useState([])
 const [IsLoad,setIsLoad]=useState(false)
 const[error,setError]=useState('')
let navigate = useNavigate();

  function getUserData(e) {
    let myUser={...user};
    myUser[e.target.name]=e.target.value;
    setUser(myUser)
    // console.log(myUser);
  }
 async function sendRegisterDataToApi() {
  /////////////////////////////////////////////////// first step//////////////////
//     let{data}=await Axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signUp`,user)
//     // console.log(data.msg);
//     console.log(data);
//     if(data.message=='done'){
//     setIsLoad(false) ////prevent load of button when success//
//     //login|home//
//     setError('');
//     navigate("/login")
// // console.log(data.msg);

//     }
//     else{
      
//     setIsLoad(false)
//     setError(error.response.data.msg)
// // console.log(error.response.data.msg);
    
//     }
// /////////////////////////////////second step////////////////////

try {
  let { data } = await Axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signUp`, user);

  if (data.message === 'done') {
    setIsLoad(false);
    setError('');
    navigate("/login");
  } else {
    setIsLoad(false);
    // Check if the error is due to the email already existing
    if (data.statusCode === 401 && data.msg === 'email is already exist') {
      setError('Email is already taken. Please choose another.');
    } else {
      // setError('An error occurred during registrationbbbbbb.');
    setIsLoad(false);
    setError('');
    navigate("/login");

    }
  }
} catch (error) {
  console.error("API Error:", error);

  // Access the error message from the response data
  if (error.response && error.response.data && error.response.data.msg === 'email is already exist') {
    setError('Email is already taken. Please choose another.');
    setIsLoad(false);
  } else {
    setIsLoad(false);
    // setError("An error occurred during registration.");
    setError('');
    navigate("/login");

  }
}

//////////////////////////////////////

  }
  function submitForm(e) {
    e.preventDefault();
    setIsLoad(true)
    
    //valid//
   let validation= valid();
   if(validation.error){
    setIsLoad(false)
    setErrorList(validation.error.details)
//  console.log(setErrorList(validation.error.details) );
// window.alert("noo")

   }
   else{
    
    sendRegisterDataToApi();//after error valid and submit send data to api//

   }
  }
  //////////////////////validation//////
function valid() {
  let scheme= Joi.object({
name:Joi.string().pattern(/^[A-Z]/).min(3).max(20).required(),
// last_name:Joi.string().min(3).max(10).required(),
phone:Joi.number().integer().min(10 ** 9).max(10 ** 10 - 1).required(),
age:Joi.number().min(16).max(80).required(),
email:Joi.string().email({tlds:{allow:['com','net']}}).required(),
password:Joi.string().pattern(/^[A-Z][a-z]{3,6}/)

  })
return scheme.validate(user,{abortEarly:false})
}
  return (
    <div>
<div className="container ">
    <div className="row">
    <div className="col-md-6 box-1 p-0 bg-register-image ">
            {/* <img src={im2} alt="" className='w-100 '/> */}
        
        </div>
    <div className="col-md-6 box-1 pb-5">
        <div className="title p-4 text-center">
            <h3>Create My Account!</h3>
        </div>
        <form onSubmit={submitForm} className="form-group">
<div className="form-group row d-flex">
    <div className="col-sm-6 mb-3 mb-sm-0 ">
    <input onChange={getUserData} name='name' id='name' type='text' className='form-control my-2' placeholder='Your Name'></input>
     {errorList.filter((err)=>err.context.label=='name')[0]? <div className="text-danger">
      <p>{errorList.filter((err)=>err.context.label=='name')[0]?.message}</p> </div>:''}
    </div>
    {/* <div className="col-sm-6">

    <input onChange={getUserData} name='last_name' id='last_name' type='text' className='form-control my-2' placeholder='Last Name'></input>
        { errorList.filter((err)=>err.context.label=='last_name')[0]? <div className="text-danger">
      <p>{errorList.filter((err)=>err.context.label=='last_name')[0]?.message}</p>  </div>:''}
    </div> */}
</div>
        <input onChange={getUserData} name='email' id='email' type='text' className='form-control my-3'placeholder='Email Address'></input>
        { errorList.filter((err)=>err.context.label=='email')[0]? <div className="text-danger">
      <p>{errorList.filter((err)=>err.context.label=='email')[0]?.message}</p> </div>:''}
    
      <input onChange={getUserData} name='age' id='age' type='number' className='form-control my-3'placeholder='Age'></input>
        { errorList.filter((err)=>err.context.label=='age')[0]? <div className="text-danger">
      <p>{errorList.filter((err)=>err.context.label=='age')[0]?.message}</p>  </div>:''}
        <input onChange={getUserData} name='password' id='password' type='password' className='form-control my-3'placeholder='Password'></input>
        { errorList.filter((err)=>err.context.label=='password')[0]? <div className="text-danger"><p>password Invalid</p> </div>:''}
    
        <input onChange={getUserData} name='phone' id='phone' type='phone' className='form-control my-3'placeholder='phone'></input>
        { errorList.filter((err)=>err.context.label=='phone')[0]? <div className="text-danger"><p>phone Invalid</p> </div>:''}


       
        
        {/* email is already exist */}
   
       
      <div className="text-danger text-center my-2">{error}</div>
      {/* {error.length > 0?<div className="text-danger text-center my-2">{error}</div>:'' } */}

      <button className='btn btn-info w-100'>  {IsLoad == true? <i className=' fas fa-spinner fa-spin'></i>:'Create Account'}</button>
<p className=' mt-2 text-center policy'>This site is protected by reCAPTCHA and the Google <a href='#'>Privacy Policy</a> and <a href="#">Terms of Service</a> apply.</p>
<hr/>
<div className="member mt-4">
    <p className='text-center'>Already a member?
    <Link href="#"className='log' to='/login'>Log In 
    <i className=" p-0 m-0 fa-solid fa-angle-right"></i>
    </Link>
    </p>
</div>
      </form>
        </div>
    
    </div>
</div>
     
    </div>
  )
}

