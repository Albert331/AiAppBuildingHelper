const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/project',require('./routes/projectRoutes'))
app.use('/api/user',require('./routes/userRoutes'))


app.listen(port,()=>{
    console.log(port)
})