const express = require('express')
const router = express.Router()
const Mongo = require('../Config/Db')

router.get('/', async (req, res) => {
    console.log('Rota de produtos acessada')

    try {
        const db = await Mongo()
        const collection = await db.collection('produtos')

        // Precisamos contar os documentos para mandar para o react admin
        // Erro do cors
        const totalCount = await db.collection('produtos').countDocuments()
        res.set('X-Total-Count', totalCount) // Adicionando no cabecalho
        // Busca todos os produtos
        const produtos = await collection.find().toArray()
        console.log(produtos)

        // Produtos com id para mapear no react admin como id e nao _id
        const produtosComId = produtos.map(produto => ({
            id: produto._id.toString(),
            ...produto
        }))

        res.json(produtosComId)
    } catch (err) {
        console.error(err)
    }
})

module.exports = router