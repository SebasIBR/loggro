const mongoose = require("mongoose")
const URI_DB = 'mongodb+srv://loggroSebas:sesPdOvUddAKc14v@cluster0.50l2tuw.mongodb.net/loggroDB?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(URI_DB) 
        console.log('Base de datos Conectada')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}

module.exports = connectDB
