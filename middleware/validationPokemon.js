const Joi = require('joi')

const pokeSchema =  Joi.object({
    name: Joi.string().min(3).max(20).required()
})


exports.validatePokemon = (req, res, next) => {
    const { error } = pokeSchema.validate(req.body);

    if(error){
        return res.status(400).json({
            status: "error",
            message: error.details[0].message
        })
    }
    next();
}