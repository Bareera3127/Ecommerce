import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'



const Banner = () => {
  return (

    <Carousel autoPlay showThumbs={false} interval={3000} infiniteLoop showStatus={false} showIndicators={false}>
      <div className='banner-container'>
        <img src="/images/2.jpg" alt="banner" />
      </div>
      <div className='banner-container'>
        <img src="/images/model-02.jpg" alt="banner" />
      </div>
      <div className='banner-container'>
        <img src="/images/model-03.jpg" alt="banner" />
      </div>
      <div className='banner-container'>
        <img src="/images/model-04.jpg" alt="banner" />
      </div>
    </Carousel>
  )
}

export default Banner