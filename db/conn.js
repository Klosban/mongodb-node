const mongoose = require('mongoose')

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/nodemongoose')
    console.log('Mongoose conectado com sucesso! ✔')
}

main().catch((err) => console.log('Aconteceu um erro: ', err))

module.exports = mongoose