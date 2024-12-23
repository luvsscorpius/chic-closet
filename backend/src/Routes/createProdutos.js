const express = require('express')
const router = express.Router()
const Mongo = require('../Config/Db')

router.post('/', async (req, res) => {
    const novoProduto = req.body
    console.log(novoProduto)

    try {
        const db = await Mongo()
        const collection = await db.collection('produtos')

        const result = await collection.insertOne(novoProduto)

        console.log('Produto adicionado com sucesso.')

        console.log(result.insertedId.toString())

        // Respondendo o cliente com o produto criado, incluindo o id
        res.status(201).json({ id: result.insertedId.toString(), ...novoProduto})

    } catch (err) {
        console.error(err)
    }
})

module.exports = router