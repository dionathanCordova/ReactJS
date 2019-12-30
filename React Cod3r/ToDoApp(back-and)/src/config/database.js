const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('Conexão ao mongoose feita')
}).catch((err) => {
    console.log("Falha na conexao: " + err)
})