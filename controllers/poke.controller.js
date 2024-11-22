create = (req, res) => {
    res.status(201).json({
        status: 'sucess',
        data: {
            message: "[Yo creo un pokemon]"
        }
    })
}


get = (req, res) => {
    console.log(req.query.type)
    res.status(200).json({
        status: 'sucess',
        data: {
            message: "[Te entrego todos los pokemones]"
        }
    })
}


getList = (req, res) => {
    console.log(req.query.type)
    res.status(200).json({
        status: 'sucess',
        data: {
            message: "[Te entrego todos los pokemones]"
        }
    })
}


put = (req, res) => {
    console.log(req.query.type)
    res.status(200).json({
        status: 'sucess',
        data: {
            message: "[Te entrego todos los pokemones]"
        }
    })
}

deletePoke = (req, res) => {
    console.log(req.query.type)
    res.status(200).json({
        status: 'sucess',
        data: {
            message: "[Te entrego todos los pokemones]"
        }
    })
}


module.exports = {
    create,
    getList,
    deletePoke,
    put,
    get
}