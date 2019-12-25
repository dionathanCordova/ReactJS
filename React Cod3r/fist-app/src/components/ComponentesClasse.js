import React, {Component} from 'react'

export default class ComponentesClasse extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1>Curso de {this.props.curso}</h1>
        )
    }
}