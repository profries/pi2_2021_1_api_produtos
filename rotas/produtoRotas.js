const express = require('express');
const rotas = express.Router();

rotas.get('/', (req, res) => {
    res.send('Listar Produtos')
})

rotas.post('/', (req, res) => {
    res.send('Inserir Produto')
})

module.exports = rotas
