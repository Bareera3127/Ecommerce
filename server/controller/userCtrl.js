const  user = require('../models/user')
const bcryptjs = require('bcryptjs')

const jwt = require ('jsonwebtoken')

const Login = async(req, res) =>{
    const body = req.body
    const findUser = await  user.findOne({ email: body.email })
    const comparePassword = await bcryptjs.compare(body.password, findUser.password)
    if(!comparePassword)
    {
        return res.status(401).json({ errorMessage: 'Invalid Password'})
    }
    //we are creating token using json webtoken
    const token  = jwt.sign({ userId: findUser._id }, process.env.JWT_SECRET,{expiresIn :'1d'})
    // we are sending the token  to the front end  in the form of cookie
    res.cookie('auth-token', token,{
        //cookie expire time
        httpOnly: true,// used for http only
        secure: false, //if you are using https then must make it 'true'
        maxAge: 86400000 //expire time in miliseconds
    })

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

const Logout = async(req, res) => {
    res.cookie("auth-token", "", {
        expires: new Date(0),
        httpOnly: true,
        secure: false,
        maxAge: 0,
    })
    res.status(200).json({message:'Logging out'})
}

module.exports = {Login, Register, Logout}

