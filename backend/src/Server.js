const express = require('express')
const app = express()
const port = 2000
const cors = require('cors')

app.use(cors())
app.use(express.json())
// Precisamos expor o cabecalho para o react admin
app.use(cors({exposedHeaders: ['X-Total-Count']}))

//importando rotas
const indexRoute = require('./Routes/index.route')
const loginRoute = require('./Routes/login.route')
const produtosRoute = require('./Routes/produtos.route')

//usando as rotas
app.use('/', indexRoute)
app.use('/login', loginRoute)
app.use('/produtos', produtosRoute)

app.listen(port, () => {
    console.log("Servidor rodando na porta", port)
})