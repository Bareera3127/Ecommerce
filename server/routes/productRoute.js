const express = require('express')
const { getAllProducts, CreateProduct, singleProduct } = require('../controller/productCtrl')
const AuthMiddleware = require('../middleware/AuthMiddleware')
const { addtoCart, getUserCart, deleteFromCart } = require('../controller/cartCtrl')

const router = express.Router()

router.post('/create', CreateProduct)
router.get('/all', getAllProducts)
router.get('/single/:id', singleProduct)

//add to cart route api
router.post('/addtocart', AuthMiddleware, addtoCart)
//get user cart route api
router.get('/getusercart', AuthMiddleware, getUserCart)
router.delete('/delete/:productId', AuthMiddleware, deleteFromCart)

module.exports = router
