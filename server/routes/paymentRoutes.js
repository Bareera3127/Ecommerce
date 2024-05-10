const express = require('express')
const  {CreatePayment} = require('../controller/paymentCtrl')

const router =  express.Router();
router.post('/create_payment', CreatePayment);
module.exports = router;