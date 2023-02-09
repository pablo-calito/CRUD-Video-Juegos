const { Schema, model } = require('mongoose');

const VideoJuegosShema = Schema({
    Nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    Tipo: {
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    Precio: {
        type: String,
        required: [true, 'el precio es obligatario']
    },
    Creador: {
        type: String,
        required: [false],
       
    },
    Clasificacion: {
        type: String,
        required: [true],
        enum: ['+18', '-18']
    },
    Estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model('VideoJuego', VideoJuegosShema)