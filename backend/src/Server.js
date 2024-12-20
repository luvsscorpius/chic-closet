const express = require('express')
const app = express()
const port = 2000

//importando rotas
const indexRoute = require('./Routes/index.route')

//usando as rotas
app.use('/', indexRoute)

app.listen(port, () => {
    console.log("Servidor rodando na porta", port)
})