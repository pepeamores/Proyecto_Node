const mongoose = require('mongoose');
const Shema = mongoose.Shema;

const campeonatoShema = new Shema({
    anio: Number,
    piloto_G: String,
    escuderia_G: String,
    punto :Number
})

const Campeonato = mongoose.model('campeonato', campeonatoShema, "campeonato");

module.exports = Campeonato;