import React from 'react'
import axios from 'axios'
import { useState } from 'react'
// import './Login.css'

import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")//useState is shortcut for function
    const navigate = useNavigate()

    const LoginUser = async(e) =>{
        e.preventDefault()//this line prevnts default behaviour of the for submission, 
        // which would cause the page to reload
        try{

            const response = await axios.post('http://localhost:3000/api/v1/user/login',{
                email:email,
                password:password
            })
            console.log(response.data.data)
            localStorage.setItem('userLogged', JSON.stringify(response.data.data))
            alert('login successful')            
             navigate('/')
        }catch(error)
        {
            alert('invalid username and password' )
        }
   
    }
  return (
    <div >
    <form>
        <h3>Login</h3>
        <label>Email : </label>
        <input type='email' id='emailId' placeholder='enter an email' onChange={(e) =>setEmail(e.target.value)}/>
        <label>password</label>
        <input type='password' placeholder='enter the password' onChange={(e) =>setPassword(e.target.value)}/>
        <button onClick={LoginUser} type='submit'>Login</button>
       </form>
</div>
  )
}
