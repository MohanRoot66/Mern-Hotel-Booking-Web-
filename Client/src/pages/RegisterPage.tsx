import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  
  const [formValues,changeValues] = useState({
    username:"",
    email:"",
    password:""
  })
  
  const handleInputChange=(e)=>{
    const {name} = e.target

    changeValues({
      ...formValues,
      [name]:e.target.value 
    })
  }

  const registerUser = async(e) =>{
    e.preventDefault()
    try{

      await axios.post("/register",{
        username : formValues.username,
        email :  formValues.email,
        password : formValues.password
      });
      alert("Registration successfull..");
    }
    catch(e){
      alert("Registration Failed , Please Try again");
    }
  }

  return (
    <div className='mt-4 flex flex-grow flex-col items-center justify-around'>
      <div className='mb-40'>
        <h1 className='text-4xl text-center mb-4'>Register</h1>
        <form className='max-w-md mx-auto' onSubmit={registerUser}>
            <input type="text" name='username' value={formValues.username} onChange={handleInputChange} placeholder='Jhon Doe' />
            <input type="email" name='email' value={formValues.email} onChange={handleInputChange} placeholder='your @email.com' />
            <input type="password" name='password' value={formValues.password} onChange={handleInputChange} placeholder='password' />
            <button className='primary'>Register</button>
            <div className='text-center py-2 text-gray-500'>Already a Member
              <Link className='underline text-black-500' to={"/login"}>Login</Link>
            </div>
        </form>
        </div>
    </div>
  )
}
