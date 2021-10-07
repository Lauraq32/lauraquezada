
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    img: {
        type: String,
         default: "https://unsplash.com/photos/EpIUbeFrqwQ"
        
    },
    rol: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
    quote: {
        type: String,
         default: "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote" 
          
    },
});





module.exports = model( 'Usuario', UsuarioSchema );
