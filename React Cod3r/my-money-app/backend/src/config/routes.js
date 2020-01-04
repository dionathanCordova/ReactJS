const express = require('express')

module.exports = (server) => {
    // URL BASE
    const router = express.Router()

    // Todas as rotas que iniciam com "/api" são direcionadas para o router
    server.use('/api', router)

    // Setando os methods das rotas dinamicamente
    const BillingCycle = require('../api/cicloPagamento/cicloPagamentoServices')
    BillingCycle.register(router, '/pagamentos')
}