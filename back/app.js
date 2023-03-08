const express = require('express')
const app = express()

app.get("/endpoint", (req, res) => {
    res.send({
        "nombre": "Sebastian",
        "Apellido":"Ibarguen"
    })
})


app.listen(3001, () => {
    console.log("servidor corriendo en el puerto 3000");
})