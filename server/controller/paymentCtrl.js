// const PaymentDetail  =  require(/model/paymentDetail.js)

const stripe = require('stripe')(process.env.STRIPE_SECERET_KEY);
const CreatePayment =  async(res, req) => {
    const {product} = req.body;

    const lineItems = products.map((product) => {
        console.log(product.product)
        return{
            price_data: {
                currency: "aed",
                product_data:{
                    name: product.product.productName,
                },
                unit_amount :  product.product.price*100,
            },
           quantity:product.quantity,
        }
    })

    const session =   await stripe.checkout.sessions.create({
        payment_method_types : ["card"],
        line_items:  lineItems,
        mode: "payment",
        success_url: "http:localhost:3000/success",
        cancel_url: "http:localhost:3000/cancel"
    }); 
    console.log(session)
    res.json({id:session.id})
}
module.exports = {
    CreatePayment
}