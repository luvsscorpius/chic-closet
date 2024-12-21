const express = require('express')
const router = express.Router()
const Mongo = require('../Config/Db')
const jwt = require('jsonwebtoken')

const secretKey = 'teste123'

router.post("/", async (req, res) => {
    const userLoginInfo = req.body
    console.log(userLoginInfo)
    console.log('Acessando rota de login')

    try {
        const db = await Mongo()
        const collection = await db.collection('usuarios')

        // Procurando um usuário de acordo com o nome passado na requisicao
        const user = await collection.findOne({user: userLoginInfo.name})
        const isCorrectPassword = user.password === userLoginInfo.password ? true : false

        // Verificando se com o usuário encontrado a senha eh a mesma do backend
        if (user && isCorrectPassword === true) {
            console.log('Encontrei')
            const token = jwt.sign({name: user.user}, secretKey, {expiresIn: '1min'})
            return res.json(token).status(200)
        } else {
            console.log('Não encontrado')
            return res.status(401).send('Credenciais incorretas')
        }

    } catch (err) {
        console.error(err)
    }
})

module.exports = router