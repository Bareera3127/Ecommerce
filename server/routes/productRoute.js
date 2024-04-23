const express = require('express')
const {getAllProducts, CreateProduct, SingleProduct, singleProduct} = require('../controller/productCtrl.js')
const router = express.Router()

router.post('/create', CreateProduct)
router.get('all/', getAllProducts)
router.get('/single/:id', singleProduct)

module.exports =  router