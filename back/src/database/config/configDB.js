const mongoose = require("mongoose")

// const connectDB = () => {
//     const URIDB = procces.env.URIDB;
//     mongoose.connect(URIDB,{
//         useNewUrlParser:true,
//         useUniFiedTopology:true
//     },(error,res) => {
//         if(!error){
//             console.log("Conexion establecida");
//         }else{
//             console.log("Error de conexion");
//         }
//     }
//     )
// }
// module.exports = connectDB


// const connectDB = async () => {
//     try {
//         mongoose.set('strictQuery', false)
//         mongoose.connect(URIDB) 
//         console.log('Base de datos Conectada')
//     } catch(error) {
//         console.log(error)
//         process.exit()
//     }
// }

// module.exports = connectDB
