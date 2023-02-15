const express = require('express');
const Circuito = require('../models/circuito');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        //Le pondremos arrayPokemonDB para diferenciar
        //los datos que vienen de la base de datos
        //con respecto al arrayPokemon que tenemos EN LA VISTA
        const arrayCircuitoDB = await Circuito.find();
        console.log(arrayCircuitoDB);
        res.render("circuito", { 
            arrayCircuito: arrayCircuitoDB
        })
    } catch (error) {
        console.error(error)
    }
})
module.exports = router;