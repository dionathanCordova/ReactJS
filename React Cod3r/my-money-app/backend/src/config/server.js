const express = require('express')
const app = express()
const Cors = require('../config/cors')
const queryParser = require('express-query-int')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(Cors)
app.use(queryParser())

const PORT = 3003
app.listen(PORT, () => {
    console.log('Servidor rodando')
})

module.exports = app