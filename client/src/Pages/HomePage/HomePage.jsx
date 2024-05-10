import React from 'react'
import Navbar from '../../components/Navbar/Navabar.jsx'
import Banner from '../../components/Banner/Banner.jsx'
import Brands from '../../components/Brands/Brands.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import MostFeatured from '../../components/MostFeatured/MostFeatured.jsx'
import PopularProducts from '../../components/PopularProducts/PopularProducts.jsx'
import Promo from '../../components/Promo/Promo.jsx'
import Services from '../../components/Services/Services.jsx'

export default function HomePage() {
  return (
    <>
      
        <div className='promo'>
         <Banner/>
         
           <Promo/>
        </div>
        <Services/>
        <MostFeatured/>
        <PopularProducts/>
        <Brands/>
        {/* <Footer/> */}
    </>
  )
}
