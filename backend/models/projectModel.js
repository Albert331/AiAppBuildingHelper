const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    projectName:{
        type:String,
        required:true,
    },
    projectInfo:{
        type:mongoose.Schema.Types.Mixed,
        required:true,

    }
    },{
        timestamps:true
    }
)

module.exports = mongoose.model('project',projectSchema)