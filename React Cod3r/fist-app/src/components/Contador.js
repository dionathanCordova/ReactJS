import React, {Component} from 'react'

export default class Contador extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            num: 0
        }
        this.maisUm = this.maisUm.bind(this);
    }

    maisUm() {
        let state = this.state;
        state.num += 1;
        this.setState(state);
    }

    menosUm() {
        let state = this.state;
        state.num -= 1;
        this.setState(state);
    }

    zerarNum = () => {
        let state = this.state;
        state.num = 0;
        this.setState(state);
    }

    render() {
        return (
            <div>
                <h1>Número: {this.state.num}</h1>
                <button onClick={this.maisUm}>Incr</button>
                <button onClick={() => this.menosUm()}>Decr</button>
                <button onClick={this.zerarNum}>Zerar</button>
            </div>
        )
    }
}