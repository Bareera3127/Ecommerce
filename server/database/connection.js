const mongoose = require('mongoose')



// function runServer(){
    function RunServer(){

    try {
        // mongoose.connect('mongodb+srv://bareera3127:MW4b3ftQfxdkwuHm@cluster0.aws1acg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')  
        mongoose.connect(process.env.MONGO_DB_URL);
        console.log('db connected')
    } catch (error) {
        console.log('error connecting db ')
    }
 
}

module.exports =  RunServer
