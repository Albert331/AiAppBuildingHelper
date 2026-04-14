const user = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const registerUser = async (req,res) =>{
    const {name,email,password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('please add all fields')
    }
    const userExists = await user.finOne({email})

    if(userExists){
        res.status(400)
        throw new Error("already account haia bhaiya")
    }

    const salt = bcrypt.genSalt(10)
    const hashedPass = bcrypt.hash(password,salt)

    const userdone= await user.create({
        name,
        email,
        password:hashedPass,
    })


    if(userdone){
        res.status(201).json({
            id:userdone.id,
            name:userdone.name,
            email:userdone.email,
            token:generateToken(userdone.id),
        })
    }else{
        res.status(400)
        throw new Error('invadlid data')
    }
}

const loginUser = async (req,res) =>{
    const {email,password} = req.body

    if(!email || !password){
        res.status(400)
        throw new Error('please enter a valid email and password')
    }

    const userdone = await user.findOne({email})

    if(userdone && (await bcrypt.compare(password,userdone.password))){
        res.json({
            id:userdone.id,
            name:userdone.name,
            email:userdone.email,
            token:generateToken(userdone.id)
        })
    
    }else{
        res.status(400)
        throw new Error('invalid login fam')
    }

}

const getUserData =  async (req,res)=>{
    console.log(req.user)
    const{id,name,email} = await user.findById(req.user.id)
    res.status(200).json({
        id:id,
        name,
        email,
    })
}


const generateToken = (id) =>{
    return jwt.sign({id},process.env.SECRET,{
        expiresIn:'10d'
    })
}