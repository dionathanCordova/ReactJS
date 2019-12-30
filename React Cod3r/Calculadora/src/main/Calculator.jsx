import React, {Component} from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0', // valor que é mostrado na tela
    clearDisplay: false, // limpar o valor monstrado na tela
    operation: null, // operação selecionada
    values: [0, 0], // indice 0 é usado até que alguma operação seja selecionada
    current: 0 
}

export default class Calculator extends Component {

    state = { ...initialState};
    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({...initialState})
    }

    setOperation(operation) {
        // limpa o display, muda o current e armazena a operação
        if(this.state.current === 0) {
            this.setState({operation, current: 1, clearDisplay: true})
        }else{
            // quando for escolhido a peração "="
            const equals = operation === '=' 
            // guardando a operação selecionada
            const currentOperation = this.state.operation
            // fazendo uma copia do array de valores
            const values = [...this.state.values]

            try {
                // fazendo o calculo independente da operação
                // então o array values com indice 0 recebe o valor calculado
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch (error) {
                values[0] = this.state.values[0]                
            }

            values[1] = 0
        
            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current : equals ? 0 : 1,
                clearDisplay : !equals, 
            })
        }
    }

    addDigit(n) {
        if(n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n

        this.setState({displayValue, clearDisplay : false})
        
        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [ ...this.state.values]
            values[i] = newValue
            this.setState({values})
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC"click={this.clearMemory} classAtt="triple"/>
                <Button label="/" click={this.setOperation} classAtt="operation"/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} classAtt="operation"/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} classAtt="operation"/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} classAtt="operation"/>
                <Button label="0" click={this.addDigit} classAtt="double"/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" click={this.setOperation} classAtt="operation"/>
            </div>
        )
    }
}