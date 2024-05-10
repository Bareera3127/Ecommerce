import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useParams, useNavigate} from "react-router-dom"
import "./ProductDetails.css"


const ProductDetails = () => {
  const { id }  = useParams()
  const [product, setProduct] = useState({})
  const navigate = useNavigate()

  const getSingleProduct = async () => {
    try{
      const response = await  axios.get(`http://localhost:3000/api/v1/single/${id}`)
      console.log(response.data.data)
      setProduct(response.data.data)   
    }
    catch(error){
      console.log(error);
    }
  }

useEffect(() => {
  getSingleProduct()
}, [])

const addToCart = () => {
  const cartItems=JSON.parse(localStorage.getItem("carItems")) || [];
  cartItems.push(id);
  localStorage.setItem("carItems", JSON.stringify(cartItems));
  navigate('/cart');
};
  return (
    <div>

      <h1 className='heading-tags'>Product Details</h1>
      <div className='productDetails-container'>
        <div>
          <img className='product-details-image' src={product.img} alt='product-image'/>
        </div>
        <div>
          <h1 className='names'>{product.productName}</h1>
          <h2 className='names'>{product.price}</h2>
          <button className='cart' onClick={addToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
export default ProductDetails