const Contenedor = require('./desafio2')
const express = require('express')
require('dotenv').config();

const app = express();

app.get('/productos', (_req, res) =>{
    res.status(200).json(container.getAll())
})

app.get('/productoRandom', (_req, res) =>{
    res.status(200).json(container.Random())
})



const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.info(`Servidor en linea en el puertos ${PORT}`)
})

const container = new Contenedor("productos")