import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext';

export default function LoginPage() {

  const [formValues,setFormValues] = useState({
    email:"",
    password:""
  })

  const navigate = useNavigate();

  const handleChange= (e) =>{
    const {name,value} = e.target
    setFormValues({
      ...formValues,
      [name]:value
    })
  }

  const {setUser} = useContext(UserContext);

  const handleSubmit= async(e) =>{

    e.preventDefault()
    
    try{
      const {data} = await axios.post("/login",{
        email:formValues.email,
        password:formValues.password
      })
      setUser(data);
      alert("Loggined Succesfully");
      navigate("/");
    }
    catch{
      alert("Login Failed");
    }
    //console.log(formValues);
  }

  return (
    <div className='mt-4 flex flex-grow flex-col items-center justify-around'>
      <div className='mb-40'>
        <h1 className='text-4xl text-center mb-4'>Login</h1>
        <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
            <input type="email" name='email' placeholder='your @email.com' onChange={handleChange}/>
            <input type="password" name='password' placeholder='password' onChange={handleChange}/>
            <button className='primary'>Login</button>
            <div className='text-center py-2 text-gray-500'>Don't have an account yet? 
              <Link className='underline text-black-500' to={"/register"}>Register now</Link>
            </div>
        </form>
        </div>
    </div>
  )
}
