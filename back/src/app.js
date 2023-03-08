require("dotenv").config()
const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./database/config/configDB')

app.use(cors())

app.get('/', (req, res) => {
    res.send("Hola Mundo")
})

const port = process.env.PORT || 3001 

app.listen(port, () => {
    console.log("servidor corriendo en el puerto:",port);
})

connectDB()