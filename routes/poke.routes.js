const express = require('express')
const router = express.Router();
const pokeController =  require('./../controllers/poke.controller')
const { validatePokemon } = require('../middleware/validationPokemon')

router.get("/", pokeController.getList)
router.get("/:id", pokeController.get)
router.post("/", validatePokemon,  pokeController.create)
router.put("/:id", pokeController.put)
router.delete("/:id", pokeController.deletePoke)

module.exports = router;