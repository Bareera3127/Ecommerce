const mongoose = require('mongoose');
const PaymentDetailsSchema  = new mongoose.schema({
    paymentId :  String,
    amount : Number,
    currency :  String,
    status :  String,
    method:  String,
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //Reference to your user model if you have one 
    created : {
        type: Date,
        default: Date.now
    }
});

const paymentDetail =  mongoose.model('PaymentDetail', PaymentDetailsSchema)
module.exports =  paymentDetail