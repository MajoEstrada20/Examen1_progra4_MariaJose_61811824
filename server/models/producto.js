const mongoose = require('mongoose');

let Schema = mongoose.Schema;

//Definir el esquema para el modelo Producto (Valor 5 puntos)

let Producto= new Schema({
    Nombre: {
        type: String,
        require:[true, "Es necesario ingresar el nombre"]
    },
    Precio: {
        type:Number ,
        require:[true, "Es necesario ingresar el precio"]
    },
    Creado_en: {
        type: date,
        default:Date.now
    }

})
module.exports = mongoose.model('Producto', usuarioSchema);