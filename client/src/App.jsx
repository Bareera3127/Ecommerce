import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import PageNotFound from './Pages/PageNotFound/PageNotFound'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
// import CartPage from './Pages/HomePage/CartPage'


export default function App() {
  return (
   // grouping all the routes
   <Routes>
   {/*Single Route */}
   <Route path='/' element={<HomePage/>}/>
   <Route path='/login'  element={<LoginPage/>}/>
   <Route path='/register' element={<RegisterPage/>}/>
   {/* <Route path='/cart' element={<Cartpage/>}/> */}
   <Route path='/product/:id' element={<ProductDetails />}/>
   {/*page  not found route should always add in last. * is used to show there */}
   <Route path='*' element={<PageNotFound/>} />
   </Routes>
  )
}
