import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter(){
    const {completed, total} = React.useContext(TodoContext);
    return (
        <h2 className='TodoCounter'>Has completado {completed} de {total} TODOs</h2>
    )
}

export {TodoCounter};