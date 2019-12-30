import React from 'react'
import Grid from '../template/grid'
import ButtonIcon from '../template/iconButton'

export default props => {
    const keyHancler = (e) => {
        if(e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClearForm()
        }
    }
    return(
        <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input 
                    type="text" 
                    id="description" 
                    className="form-control" 
                    placeholder="Adicione uma tarefa"
                    onChange={props.handleChange}
                    onKeyUp={keyHancler}
                    value={props.description}
                />
            </Grid>

            <Grid cols="12 3 2">
                <ButtonIcon style="primary" icon="plus" onClick={props.handleAdd}/>
                <ButtonIcon style="info" icon="search" onClick={props.handleSearch}/>
                <ButtonIcon style="default" icon="close" onClick={props.handleClearForm}/>
            </Grid>
        </div>
    )
}