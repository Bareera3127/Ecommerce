const  user = require('../models/user')
const bcryptjs = require('bcryptjs')

const Login = async(req, res) =>{
    const body = req.body
    const findUser = await  user.findOne({ email: body.email })
    const comparePassword = await bcryptjs.compare(body.password, findUser.password)
    if(!comparePassword)
    {
        return res.status(401).json({ errorMessage: 'Invalid Password'})
    }
    res.send({message:'success', data:findUser})
}

const Register = async (req, res) => {
    const body =  req.body
    const hashpassword = await  bcryptjs.hash(req.body.password, 10)
    const saveData = await user.create({
        //it inserts new data and stores in new data 
        username: body.username,
        email: body.email,
        password: hashpassword
         })//saves in mongoose database


    res.send({message:'success', data:saveData})
    //sending back the user data to react
}

module.exports ={Login, Register}

