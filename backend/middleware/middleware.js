const jwt = require('jsonwebtoken')
const user = require('../models/userModel')

const protect = async (req,res,next) =>{
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token,process.env.SECRET)

            req.user = await user.findById(decoded.id).select('-password')

            next()
        }catch(error){
            console.log(error)
            res.status(401)
            throw new Error('not aithorizes')
        }

    }


    if(!token){
        res.status(401)
        throw new Error('not authorized and no token gareeb')
    }
}

module.exports = {protect}