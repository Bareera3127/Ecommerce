import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// Comment code | Improve Code
export default function Register(){
  const [username, setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")//useState is shortcut for function
    const navigate = useNavigate()

    const RegisterUser = async(e) =>{
        e.preventDefault()//this line prevnts default behaviour of the for submission, 
        // which would cause the page to reload
        const response = await axios.post('http://localhost:3000/api/v1/user/register',{
            email:email,
            password:password,
            username: username
        })
        console.log(response)
        navigate('/login')
    }

  return (
    <div>
        <form>
            <h3>Register</h3>
           <label>Username:</label>
           <input type='text' placeholder='enter your name' onChange={(e) => setUsername(e.target.value)}/>
            <label>Email : </label>
            <input type='email' placeholder='enter an email' id="email" onChange={(e) =>setEmail(e.target.value)}/>           
            <label>password</label>
            <input type='password' placeholder='enter the password' onChange={(e) =>setPassword(e.target.value)}/>
           
            <button  onClick={RegisterUser} type='submit'>Register</button>
           </form>
    </div>
  )

}