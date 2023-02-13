const mongoose = require('mongoose');
const Shema = mongoose.Shema;

const escuderiaShema = new Shema({
    nombre: String,
    pais :String,
    motor: String,
})

const Escuderia = mongoose.model('escuderia', escuderiaShema, "escuderia");

module.exports = Escuderia;