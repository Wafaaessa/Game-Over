import Axios from 'axios';
import Joi from 'joi';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import im1 from '../../../src/logo.png'



export default function Login({saveData}) {

 let navigate = useNavigate()
 const[errorList,setErrorList]=useState([])

  const [IsLoad,setIsLoad]=useState(false)
  const[error,setError]=useState('')
  const [user, setUser] = useState({
  
    email:"",
    password:""
 
  })
  function getUserData(e) {
    let myUser={...user};
    myUser[e.target.name]=e.target.value;
    setUser(myUser)
    // console.log(myUser);
  }
 async function sendLoginDataToApi() {
    // let{data}=await Axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signIn`,user)
    // console.log(data.msg);
    // if(data.msg=='done'){
    // setIsLoad(false) ////prevent load of button when success//
    // localStorage.setItem('userToken',data.token)
    // saveData();//from app js

    // //login|home//
    // navigate("/home")
    // }
    // else{
    // setIsLoad(false)
    // setError(data.msg)
    // // console.log(data.msg);

    // }
    try {
      let { data } = await Axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signIn`, user);
  
      if (data.msg === 'done') {
        setIsLoad(false);
        localStorage.setItem('userToken', data.token);
        saveData(); // from app js
        navigate("/home");
      } else {
        setIsLoad(false);
  
        // Check if the error is due to email not existing
        if (data.msg === 'email not exist') {
          setError('Email does not exist. Please check your email.');
        } else {
          setError(data.msg);
          
        }
      }
    } catch (error) {
      console.error("API Error:", error);
      setIsLoad(false);
      // setError("An error occurrbbed during login.");
      setError('Email does not exist. Please check your email.');

    }
  }


  
  function submitForm(e) {
    e.preventDefault();
    setIsLoad(true)
    //valid//
   let validation= valid();
   if(validation.error){
    setIsLoad(false)
    setErrorList(validation.error.details)
   }
   else{
    sendLoginDataToApi();//after error valid and submit send data to api//

   }
  }
  function forgot() {
    alert('Register again')
  }
  //////////////////////validation//////
function valid() {
  let scheme= Joi.object({
email:Joi.string().email({tlds:{allow:['com','net']}}).required(),
password:Joi.string().pattern(/^[A-Z][a-z]{3,6}/)
  })
return scheme.validate(user,{abortEarly:false})
}
  return (
    <div>
<div className="container ">
    <div className="row ">
    <div className="col-md-6 box-1 p-0 bg-register-image ">  
        </div>
    <div className="col-md-6 box-1 pb-5 p-5">
        <div className="title p-4 text-center">
          <img src={im1} alt="" className='w-25'/>
            <h3>Log in to GameOver</h3>
        </div>
        <form onSubmit={submitForm} className="form-group">
        <input onChange={getUserData} name='email' id='email' type='text' className='form-control my-3 my-input  'placeholder='Email Address'></input>
        { errorList.filter((err)=>err.context.label=='email')[0]? <div className="text-danger">
      <p>{errorList.filter((err)=>err.context.label=='email')[0]?.message}</p> </div>:''}
    
        <input onChange={getUserData} name='password' id='password' type='password' className='form-control my-input my-3'placeholder='Password'></input>
        { errorList.filter((err)=>err.context.label=='password')[0]? <div className="text-danger"><p>password Invalid</p> </div>:''}
   
       <div className="text-danger text-center my-2">{error}</div>
   
      {/* {error.length > 0?<div className="text-danger text-center my-2">{error}</div>:'' } */}
      
      <button className='btn btn-info w-100'>  {IsLoad == true? <i className=' fas fa-spinner fa-spin'></i>:'Login'}</button>

<hr/>
<div className="member mt-4 text-center">
 <h5 className='text-center'onClick={forgot}>Forgot Password?</h5>
 <p>
 Not a member yet? 
 <Link className='spann' to='/'>Create Account 
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

