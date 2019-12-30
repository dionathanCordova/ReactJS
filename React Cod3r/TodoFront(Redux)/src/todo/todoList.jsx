import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

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
                            <IconButton style="success" icon="check" onClick={() => props.handleDone(data)} hide={data.done}/>
                            <IconButton style="warning" icon="undo" onClick={() => props.handlePending(data)} hide={!data.done}/>
                            <IconButton style="danger" icon="trash-o" onClick={() => props.handleRemove(data)} hide={!data.done}/>
                        </td>
                   </tr>
               ))}
            </tbody>
        </table>
    )
}