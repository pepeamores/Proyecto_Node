const express = require('express');
const Piloto = require('../models/piloto');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        //Le pondremos arrayPokemonDB para diferenciar
        //los datos que vienen de la base de datos
        //con respecto al arrayPokemon que tenemos EN LA VISTA
        const arrayPilotoDB = await Piloto.find({escuderia:'Alfa Romeo'});
        console.log(arrayPilotoDB);
        res.render("alfaromeo", { 
            arrayPiloto: arrayPilotoDB
        })
    } catch (error) {
        console.error(error)
    }
})
module.exports = router;