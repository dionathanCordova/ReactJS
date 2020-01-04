const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney-backend', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('Conexão estabelecida')
}).catch((err) => {
    console.log('Erro na conexão' + err)
})
