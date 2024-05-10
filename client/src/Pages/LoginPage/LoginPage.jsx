import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useAuthContext } from '../../context/Authcontext'
// import './Login.css'

import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")//useState is shortcut for function
    const navigate = useNavigate()
    const { setUser } =  useAuthContext()

    const LoginUser = async (e) => {
        e.preventDefault()//this line prevnts default behaviour of the for submission, 
        // which would cause the page to reload
        try {

            const response = await axios.post('http://localhost:3000/api/v1/user/login', {
                email: email,
                password: password
            }, { withCredentials: true })
            console.log(response.data.data)
            setUser(response.data.data)
            localStorage.setItem('userLogged', JSON.stringify(response.data.data))
            //show success message  only  if the login  attempt  is successful
            alert('login successful')
            navigate('/') //homepage
        } catch (error) {
            alert('invalid username and password')
        }

    }
    return (
        <div className='container' >
            <form className='form'>
                <h3 className='heading-tags'>Login</h3>
                <label style={{ color: "#481a70" }}>Email : </label>
                <input type='email' id='emailId' placeholder='enter an email' onChange={(e) => setEmail(e.target.value)} />
                <label style={{ color: "#481a70" }}>password</label>
                <input type='password' placeholder='enter the password' onChange={(e) => setPassword(e.target.value)} />
                <button className='button' onClick={LoginUser} type='submit'>Login</button>
            </form>
        </div>
    )
}
