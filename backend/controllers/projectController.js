const project = require('../models/projectModel')
const user = require('../models/userModel')
const axios = require('axios')



const getProjects = async (req,res) =>{
    const proj = await project.find({user:req.user.id})
    res.status(200).json(proj)
}

const addProjects =async (req,res)=>{
    if(!req.body.projectName){
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

    const updated = await project.findByIdAndUpdate(req.params.id,req.body,{ returnDocument: 'after' } )
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


const generateProjectStages = async(req,res) => {
    try{
        const {projectName,projectInfo} = req.body

        const prompt = `You are an expert software engineering mentor.
        The user wants to build: ${projectName} 
        info:${projectInfo}
        
        Respond ONLY with a JSON object, no extra text:
        {
            "stages": [
                {
                    "title": "stage title",
                    "description": "detailed description",
                    "steps": ["step 1", "step 2"],
                    "tools": ["tool1", "tool2"],
                    "estimatedTime": "x days"
                }
            ]
        }`

        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                model:'nvidia/nemotron-3-super-120b-a12b:free',
                messages:[{role:'user',content:prompt}]
            },
            {
                headers:{
                'Authorization':`Bearer ${process.env.OPEN_ROUTER_API}`,
                'Content-Type':'application/json',
                'HTTP-Referer': 'http://localhost:8000',  
                'X-Title': 'AI Research App' 
            },
            timeout:30000
            }
            
        )

        const rawTxt = response.data.choices[0].message.content
        const parsed = JSON.parse(rawTxt)
        res.status(200).json(parsed)
    }catch(err){
        console.error("AI Generation Error:", error.message);
        
        
        return res.status(error.response?.status || 500).json({
            message: "Failed to generate stages",
            error: error.message
        })
    }

}


module.exports = {
    getProjects,
    addProjects,
    updateProjects,
    deleteProjects,
    generateProjectStages,

}