import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URIAPI = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            description: '',
            list: []
        }

        this.atualizarLista()
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClearForm = this.handleClearForm.bind(this)
    }

    atualizarLista(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        console.log(search)
        axios.get(`${URIAPI}?sort=createdAt${search}`)
        .then(data => this.setState({ ...this.state, description, list: data.data}))
    }

    handleChange(e) {
        let state = this.state
        state.description = e.target.value
        this.setState(state)
    }

    handleAdd() {
        axios.post(URIAPI, {'description' : this.state.description}).then((data) => {
            this.atualizarLista(this.state.description)
        }).catch((err) => {
            console.log('Erro ao cadastrar: ' + err )
        })
    }

    handleRemove(data) {
        axios.delete(`${URIAPI}/${data._id}`).then(resp => this.atualizarLista(this.state.description))
    }

    handlePending(data) {
        axios.put(`${URIAPI}/${data._id}`, {...data, done:false}).then((resp) => {
            this.atualizarLista(this.state.description)
        })
    }

    handleDone(data) {
        axios.put(`${URIAPI}/${data._id}`, {...data, done: true}).then((resp) => {
            this.atualizarLista(this.state.description)
        })
    }

    handleSearch() {
        this.atualizarLista(this.state.description)
    }

    handleClearForm() {
        this.atualizarLista()
    }

    render() {
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm  
                    description={this.state.description}
                    handleAdd={() => this.handleAdd()} 
                    handleChange={(e) => this.handleChange(e)}
                    handleSearch={this.handleSearch}
                    handleClearForm={this.handleClearForm}
                />
                <TodoList list={this.state.list} handleRemove={(data) => this.handleRemove(data)}
                handleDone={(data) => this.handleDone(data)}
                handlePending={(data) => this.handlePending(data)}
                />
            </div>
        )
    }
} 