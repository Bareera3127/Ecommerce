import { AiOutlineShoppingCart } from "react-icons/ai"; 
import './Navbar.css'
import {Link} from 'react-router-dom'
import { useAuthContext } from "../../context/Authcontext";
import axios from  'axios'


const navabar = () => {
  const {user, setUser} =  useAuthContext()
  //logout user and clear local storage and set  auth context  user to null 
  const LogoutUser = async() => 
   {
    const response = await axios.post('http://localhost:3000/api/v1/user/logout')
    if(response.status == 200)
      {
      // localStoarge.removeItem('userLogged')
      localStorage.removeItem('userLoggerd')
      setUser(null)
      // alert('you have been logout')
    }
  }
  return (
    <nav className='navbar'>
      <h1>Ecommerce</h1>
      <div className="navbar-links">
        {!user ? (
          <>
              <Link  className='links' to ={'/login'}>Login</Link>
              <Link  className='links' to ={'/register'}>Register</Link>
          </>
        ):(
          <>
            <Link className='links' to ={'/'}>Home</Link >
            {/*style logout button */}
            <button onClick={LogoutUser}>Logout</button>
          </>
        )}
        <Link className="link" to={'/cart'}><AiOutlineShoppingCart style={{"fontSize":"30px"}} /></Link>
      </div>    
    </nav>
  )
}
export default navabar




