const project = require('../models/projectModel')
const user = require('../models/userModel')



const getProjects = async (req,res) =>{
    const proj = await project.find({user:req.user.id})
    res.status(200).json(proj)
}

const addProjects =async (req,res)=>{
    if(!req.body){
        res.status(400)
        throw new Error('please gimme some info')
    }
    const proj = await project.create({
        user:req.user.id,
        projectName:req.body.projectName,
        projectInfo:req.body.projectInfo,
    })

    res.status(200).json(proj)

}

const updateProjects =async (req,res)=>{
    const proj = await project.findById(req.params.id)

    if(!proj){
        res.status(400)
        throw new Error('na mila koi bhi!!')
    }

    const userdone = await user.findById(req.user.id)

    if(!userdone){
        res.status(401)
        throw new Error('user is not found fam')
    }

    if(proj.user.toString() !== userdone.id){
        res.status(401)
        throw new Error('not allowed mate')
    }

    const updated = await project.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updated)

}

const deleteProjects = async (req,res) =>{
    const proj = await project.findById(req.params.id)

    if(!proj){
        res.status(400)
        throw new Error('na mila koi bhi!!')
    }

    const userdone = await user.findById(req.user.id)

    if(!userdone){
        res.status(401)
        throw new Error('user is not found fam')
    }

    if(proj.user.toString() !== userdone.id){
        res.status(401)
        throw new Error('not allowed mate')
    }

    

    await project.findByIdAndDelete(req.params.id)
    res.status(200).json({id:req.params.id})
}

module.exports = {
    getProjects,
    addProjects,
    updateProjects,
    deleteProjects,
}