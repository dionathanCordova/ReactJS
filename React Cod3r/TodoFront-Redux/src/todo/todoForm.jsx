import React, {Component} from 'react'
import Grid from '../template/grid'
import ButtonIcon from '../template/iconButton'

// Redux
import {connect} from 'react-redux'
// Gerar os bind
import {bindActionCreators} from 'redux'
// action criada para mudar valor do form
import { changeDescription, search, add, clear} from './todoActions'

class TodoForm extends Component {
    
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, search, clear, description } = this.props

        if(e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { add, search, description } = this.props

        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input 
                        type="text" 
                        id="description" 
                        className="form-control" 
                        placeholder="Adicione uma tarefas"
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}
                    />
                </Grid>

                <Grid cols="12 3 2">
                    <ButtonIcon style="primary" icon="plus" onClick={() => add(description)}/>
                    <ButtonIcon style="info" icon="search" onClick={search}/>
                    <ButtonIcon style="default" icon="close" onClick={this.props.clear}/>
                </Grid>
            </div>
        )
    }
}
 
const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch =>
  bindActionCreators({changeDescription, search, add, clear}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)