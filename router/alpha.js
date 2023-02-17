const express = require('express');
const Piloto = require('../models/piloto');
const Escuderia = require('../models/escuderia');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        //Le pondremos arrayPokemonDB para diferenciar
        //los datos que vienen de la base de datos
        //con respecto al arrayPokemon que tenemos EN LA VISTA
        const arrayPilotoDB = await Piloto.find({escuderia:'Alpha Tauri'});
        const arrayEscuderiaDB = await Escuderia.find({nombre:'Alpha Tauri'});
        console.log(arrayPilotoDB);
        res.render("alpha", { 
            arrayPiloto: arrayPilotoDB,
            arrayEscuderia: arrayEscuderiaDB
        })
    } catch (error) {
        console.error(error)
    }
})
module.exports = router;