const Todo = require('./todo')
Todo.methods(['get', 'post', 'put', 'delete'])

// configuracao para alteracoa de dados validando como acontece na criação dos dados
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo
