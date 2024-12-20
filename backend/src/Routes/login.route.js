const express = ('express')
const router = express.Router()

router.post("/", (req, res) => {
    console.log('Acessando rota de login')
})

module.exports = router