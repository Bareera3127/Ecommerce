const mongoose = require("mongoose")
const cartSchema =  new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    products:[
        {
            product:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"Product"
            },
            quantity:{
                type: Number,
                default: 1
            },
        },
    ],
    
},{timestamps:true})//automatically stores created date or updated date in the database
const Cart = mongoose.model('Cart', cartSchema)
module.exports =  Cart