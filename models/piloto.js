const mongoose = require('mongoose');
const Shema = mongoose.Shema;

const pilotoShema = new Shema({
    nombre: String,
    edad: Number,
    pais: String,
    num_Carrera: Number,
    victoria :Number,
    podio: Number,
    dorsal: Number
})

const Piloto = mongoose.model('piloto', pilotoShema, "piloto");

module.exports = Piloto;