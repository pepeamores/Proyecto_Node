const express = require('express');
const Piloto = require('../models/piloto');
const Escuderia = require('../models/escuderia');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        //Le pondremos arrayPokemonDB para diferenciar
        //los datos que vienen de la base de datos
        //con respecto al arrayPokemon que tenemos EN LA VISTA
        const arrayPilotoDB = await Piloto.find({escuderia:'Alpine'});
        const arrayEscuderiaDB = await Escuderia.find({nombre:'Alpine'});
        console.log(arrayPilotoDB);
        res.render("alpine", { 
            arrayPiloto: arrayPilotoDB,
            arrayEscuderia: arrayEscuderiaDB
        })
    } catch (error) {
        console.error(error)
    }
})
module.exports = router;