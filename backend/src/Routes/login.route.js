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

        if (!user) {
            console.log("Usuário não encontrado")
            return res.status(404).send("Usuário não encotrado")
        }

        const isCorrectPassword = user.password === userLoginInfo.password ? true : false

        if (isCorrectPassword === false) {
            console.log('Senha incorreta')
            return res.status(403).send('Senha incorreta    ')
        }

        // Verificando se com o usuário encontrado a senha eh a mesma do backend
        if (user && isCorrectPassword === true) {
            console.log('Encontrei')
            const token = jwt.sign({name: user.user}, secretKey, {expiresIn: '1min'})
            return res.status(200).json({token})
        } 
    } catch (err) {
        console.error(err)
    }
})

module.exports = router