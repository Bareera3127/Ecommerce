import { AiOutlineShoppingCart } from "react-icons/ai"; 

import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <ul className='ul'>
            <Link className='links' to ={'/'}>Home</Link >
            <Link  className='links' to ={'/Login'}>Login</Link>
            <Link  className='links' to ={'/Register'}>Register</Link>
            <Link className='links' to={'/Cart'}><AiOutlineShoppingCart /></Link>
            
        </ul>
        </div>
  )
}

