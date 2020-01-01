import React from 'react'
import IconButton from '../template/iconButton'

import { bindActionCreators } from 'redux'
import { maskAsDone, maskAsNotDone, remove} from './todoActions'

// Redux
import {connect} from 'react-redux'

const TodoList = props => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
               {props.list.map((data) => (
                   <tr key={data._id}>
                        <td className={data.done ? 'todoDone' : ''}>{data.description}</td>
                        <td>
                            <IconButton style="success" icon="check" onClick={() => props.maskAsDone(data)} hide={data.done}/>
                            <IconButton style="warning" icon="undo" onClick={() => props.maskAsNotDone(data)} hide={!data.done}/>
                            <IconButton style="danger" icon="trash-o" onClick={() => props.remove(data)} hide={!data.done}/>
                        </td>
                   </tr>
               ))}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch =>
  bindActionCreators({maskAsDone, maskAsNotDone, remove}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)