import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import PageNotFound from './Pages/PageNotFound/PageNotFound'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import { useAuthContext } from './context/Authcontext'
import Navabar from './components/Navbar/Navabar'

import Cartpage from './Pages/HomePage/Cartpage/Cartpage'



const App = () => {
  const {user} =  useAuthContext();
    return (
      //grouping all the routes
      <>
      <Navabar/>
      <Routes>
      <Route path='/' 
      element={<HomePage/>}/>

      <Route
       path='/login'
       element={user ? < Navigate to="/" />:< LoginPage/>}
       />

      <Route
       path='/register' 
       element={ user ?  < Navigate to="/" />:< RegisterPage/>}
       />
        <Route path='/cart' element={<Cartpage/>}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
        {/*page  not found route should always add in last. * is used to show there */}
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    
      </>

  )
}
export default App;

