import { AiOutlineDelete } from "react-icons/ai"; 
import React from 'react'

import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

import {loadStripe} from '@stripe/stripe-js'
import './Cartpage.css'


const Cartpage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getCartItems = async() => {
            const response = await  axios.get('http://localhost:3000/api/v1/getusercart',{
                withCredentials: true
            })
            setProducts(response.data.products)
        }
        getCartItems()
    }, [])

    if(!products.length){
        return(
            <div style={{padding:"20px"}}>
                <h1>Cart Page</h1>
                <h2>Your cart is empty</h2>
                <Link to="/">Continue shopping</Link>
            </div>
        )
    }

    const makePayment =  async() =>{
        const stripe =  await loadStripe("pk_test_51PBY6NRowg8sbkfgajLS17y3qYjNwB0y1vfktHSKAEJA9ViG8nuUgVpae3dpjDiQ5NErnVjgW8HiH54rkqTqHnyJ00z9GhhySq")
        const body = {
            products
        }
        const headers = {
            "Content-Type" : "application/json"
        }
        const response = await fetch("http://localhost:3000/api/v1/payment/create-payment", {
            method : "POST",
            header : headers,
            credentials : "include",
            body : JSON.stringify(body)
        });

        const session = await response.json();
        const result = stripe.redirectToCheckout({
            sessionId:session.id
        });
        if(result.error){
            console.log(result.error)
        }
    }
    const deleteFromCart =  async(productId) =>{
        const response = await axios.delete('http:localhost:3000/api/v1/delete/${productId}', {
            withCredentials: true
        })
        if(response.data.message === 'Removed from cart'){
            setProducts(products.filter((product) => product.product._id!==productId))
        }
    }
    return(
        <div style={{padding: "20px"}}>
            <h1>Cart Page</h1>
            {products.map((product) =>(
                <div key={product.product._id} style={{marginBottom:"10px"}}>
                    <h2>{product.product.productName}</h2>
                    <p><img src={product.product.img} alt='img'/></p>
                    <p>price: AED{product.product.price}</p>
                    <p>Discount: {product.product.discount}</p>

                    <button style={{display: "flex", alignItems: "center"}} onClick={() => deleteFromCart(product.product._id)}>
                      <AiOutlineDelete size={20} style={{marginRight: "%px"}}/>Delete
                    </button>
                    </div>
            ))}
            <button className='payment-btn' onClick={makePayment}>checkout</button>
        </div>
    );
    };
export default Cartpage 