const {MongoClient} = require('mongodb')

// url 
const url = "mongodb+srv://luvsscorpius:January18Th*@cluster0.xlf2lsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const Mongo = async () => {
    try {
        const client = await MongoClient.connect(url)
        console.log("Conectado ao banco de dados")

        const db = client.db('chicCloset')

        return db
    } catch (err) {
        console.error('Erro ao se conectar ao banco de dados', err)
    }
}

module.exports = Mongo