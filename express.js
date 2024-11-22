const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config();

const app = express();
const pokemonRoutes = require('./routes/poke.routes')


app.use(cors());
app.use(express.json());



app.use('/api/pokemons', pokemonRoutes)


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express desde el puerto ${port}.`)
})