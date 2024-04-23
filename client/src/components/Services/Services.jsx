import React from 'react'
import {AiOutlinePhone} from "react-icons/ai"
import { AiOutlineMail } from 'react-icons/ai'
import {BsFillTruckFrontFill} from 'react-icons/bs'


export default function Services() {
  return (
    <div>
      <h1 className='heading-tags'>Our Services</h1>\
      <div className='services-container'>
        <div>
            <BsFillTruckFrontFill className='icons' size={30} />
            <h3 className='services-tags'>Free delivery upto AED5000</h3>
        </div>
        <div>
            <AiOutlinePhone className='icons' size={40} />
            <h3 className='services-tags'>24/7 Contact Services</h3>
        </div>
        <div>
            <AiOutlineMail className='icons' size={40} />
            <h3 className='services-tags'>24/7 Online Services</h3>
        </div>
      </div>
    </div>
  )
}
