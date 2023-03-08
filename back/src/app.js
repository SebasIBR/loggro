const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/',(req,res)=>{
    res.send("Hola Mundo")
})






app.listen(3000, ()=>{
    console.log("servidor corriendo en el puerto 3000");
})