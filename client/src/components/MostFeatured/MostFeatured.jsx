import React, {useEffect, useState} from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './MostFeatured.css'
import axios  from 'axios'


const MostFeatured = () => {
  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    try{
        const response = await axios.get('http://localhost:3000/api/v1/all')
        console.log(response.data.data)
        setProducts(response.data.data)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() =>{ getAllProducts()  },[])

  return (
    <div>
       <h1 className='heading-tags'> Popular products</h1>
      <div className='most'>
        {products.map((product) => {
          return (
            <ProductCard productId={product._id}
             name={product.productName} img={product.img} price={product.price} key={product.id}/>
          )
        })}
      </div>      
    </div>
  )
}

export default MostFeatured