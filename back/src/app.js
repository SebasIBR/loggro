if (process.env.NODE_ENV != 'production') {
    require("dotenv").config()
}

const express = require('express')
const app = express()
const mongoose = require("mongoose")
const cors = require('cors')

app.use(cors())

// Routes
const imagesRouter = require("./routes/imagesRouter")
app.use("/", imagesRouter)

// DataBase Conection
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.URIDB)
        console.log('***BASE DE DATOS CONECTADA***')
    } catch (error) {
        console.log(error)
        process.exit()
    }
}

// Port Config
const port = process.env.PORT || 3000

// Server
app.listen(port, () => {
    console.log('servidor corriendo en el puerto:', port);
})

connectDB()