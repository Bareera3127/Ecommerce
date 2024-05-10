const product = require("../models/product")

//create product
const CreateProduct = async (req, res) => {
    try {
        //first we have to check whether there is product or not in the database.
        const checkProduct = await product.findOne({ productName: req.body.productName })
        if (checkProduct) {
            //401- we are telling that there is error
            return res.status(401).json({ errorMessage: 'Product already  exist'})
        }
//if product doesnt exist in database we create the product
        const addProduct = await product.create({
            productName: req.body.productName,
            price: req.body.price,
            discount: req.body.discount,
            outOfStock: req.body.outOfStock,
            img: req.body.img
        })
        res.status(200).json({ message: 'Product Created' })
    }

catch (error) {
        //503 - internal server error status.i,e nodejs gives error
        res.status(503).json({ errorMessage: 'Something Went Wrong' })
    }
}

//get all products 
const getAllProducts = async (req, res) => {
    try {
        const getall = await product.find({})
        res.status(200).json({ message: 'Success', data: getall })
    } catch (error) {
        res.status(503).json({ errorMessage: 'Something went wrong' })
    }
}
const singleProduct = async (req, res) => {

    try {
        const single = await product.findById({ _id: req.params.id })
        res.status(200).json({ message: 'Success', data: single })
    } catch (error) {
        res.status(503).json({ errorMessage: 'Something went wrong' })
    }
}
module.exports = {
    CreateProduct,
    getAllProducts,
    singleProduct
}