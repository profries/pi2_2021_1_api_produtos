const express = require('express')
const app = express()
const port = 3000

//Rotas
const produtoRota = require('./rotas/produtoRotas')
app.use('/api/produtos',produtoRota)

app.listen(port, () => {
  console.log(`Executando servidor em http://localhost:${port}`)
})