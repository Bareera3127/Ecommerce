const express = require('express')
const {getAllProducts, CreateProduct, singleProduct} = require('../controller/productCtrl')
const router = express.Router()

router.post('/create', CreateProduct)
router.get('all/', getAllProducts)
router.get('/single/:id', singleProduct)

module.exports =  router