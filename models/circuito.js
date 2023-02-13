const mongoose = require('mongoose');
const Shema = mongoose.Shema;

const circuitoShema = new Shema({
    nombre: String,
    pais: String,
    ciudad: String,
    kilometros :Number,
    curvas: Number,
})

const Circuito = mongoose.model('circuito', circuitoShema, "circuito");

module.exports = Circuito;