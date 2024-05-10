const express  = require('express')
//cors - cors origin register resource
//front end different port and back end port
const cors = require('cors')
//helmet-provides security
const helmet = require('helmet')
//morgan api logger for testing
const morgan =  require('morgan')
const RunServer = require('./database/connection')
const productRoute =  require('./routes/productRoute')
const userRoute = require('./routes/userRoute')
const paymentRoutes = require('./routes/paymentRoutes')
const cookieParser = require('cookie-parser')


// require('dotenv').config()

require('dotenv').config()

const app = express()
const port =  3000


RunServer()

// middlewares
app.use(express.json())//middleware for json data
app.use(cors({
    //we are allowing cross origin resource sharing
    origin:'http://localhost:5173',
    //this will allow front end to send cookie to the back end
    credentials:true
}))//cross-origin-resource-sharing, 
// To connect frontend and backend

app.use(helmet())
app.use(morgan('dev'))
app.use(cookieParser())
//we are using cookie parser middleware here

app.use('/api/v1/', productRoute)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/payment', paymentRoutes)


// app.listen(3000, () => {console.log("server is up")})
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})