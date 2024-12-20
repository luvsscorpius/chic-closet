const express = require('express')
const router = express.Router()

router.post("/", async (req, res) => {
    const userLoginInfo = req.body
    console.log(userLoginInfo)
    console.log('Acessando rota de login')
})

module.exports = router