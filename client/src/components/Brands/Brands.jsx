import React from 'react'
import Marquee from "react-fast-marquee"
import './Brands.css'

const fakeBranddata = [
  {
    id: 1,
    image: 'images/akupdated.jpg'
  },
  {
    id:2,
    image: 'images/appleupdated.jpg'
  },
  {
    id:3,
    image: 'images/casioupdted.png'
  },
  {
    id:4,
    image: 'images/rlupdted.jpg'
  },
  {
    id:5,
    image: 'images/thupdted.jpeg'
  },
  {
    id:6,
    image: 'images/tsn.jpg'
  }
]


const Brands = () => {
  return (
    <div className='brands-container'>
      <Marquee>
        {fakeBranddata.map((Brand) =>{
          return(
            <img src={Brand.image} key={Brand.id} className='marquee-image' alt='brand-image'/>
          )
        }
      )}
      </Marquee>
    </div>
  )
}

export default Brands