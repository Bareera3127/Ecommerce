const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    price:{
        type:Number
    },
    discount:{
        type:Number
    },
    outOfStock:{
        type:Boolean
    },
    img:{
        type:String
    }
    
}, {timestamps: true})//automatically stores created date or updated date in the database

const product = mongoose.model('Product', productSchema)
module.exports = product