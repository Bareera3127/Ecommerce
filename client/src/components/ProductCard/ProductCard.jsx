import React from 'react'
import {Link} from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({ productId, name, price, img}) => {
  return (
    <Link to={`/product/${productId}`} className='productCard'>
        <div>
            <img className='prdct-img' src={img} alt='product' />
        </div>
        <div>
            <h1>{name}</h1>
            <h3>AED {price}</h3>
        </div>
    </Link>
  )
}

export default ProductCard