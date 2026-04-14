const db = require('mongoose')
const dns = require('dns')
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

const connectDB = async()=>{
    try{
        const conn = await db.connect(process.env.MONGO_URL)
        console.log('connected to the database ready to extract data', conn.connection.host)
    }catch(err){
        console.log(err)
        process.exit(1)

    }
}

module.exports = connectDB