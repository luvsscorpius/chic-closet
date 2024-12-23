const express = require('express')
const router = express.Router()
const Mongo = require('../Config/Db')
const multer = require('multer')
const path = require('path')

// Configuração do multer para salvar imagens no disco
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads') // Pasta onde os arquivos serão armazenados
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)) // Nome único para cada arquivo
    }
})

const upload = multer({ storage: storage })

// Rota para adicionar um produto
router.post('/', upload.single('imagem'), async (req, res) => {

    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const newFile = new File({
        nome: req.body.nome,
        preco: req.body.preco,
        categoria: req.body.categoria,
        imagem: {
            filePath: req.file.path,
            title: req.file.originalname,
            fileType: req.file.mimetype,
            fileSize: req.file.size
        }
    })

    try {
        const db = await Mongo()
        const collection = await db.collection('produtos')

        const result = await collection.insertOne(newFile)

        console.log('Produto adicionado com sucesso.')

        console.log(result.insertedId.toString())

        // Respondendo o cliente com o produto criado, incluindo o id
        res.status(201).json({ id: result.insertedId.toString(), ...newFile })

    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Erro ao adicionar produto' })
    }
})

module.exports = router
