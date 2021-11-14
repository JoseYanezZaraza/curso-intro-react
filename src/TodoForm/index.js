import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"

function TodoForm(){
  const {addTodo, setOpenModal} = React.useContext(TodoContext);
  const [newTodoValue, setTodoValue] = React.useState('');

  const onChange = (event) =>{
    setTodoValue(event.target.value);
  };
  const onCancel = () =>{
    setOpenModal(prevState => !prevState);
  };
  const onSubmit = (event) =>{
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(prevState => !prevState);
  };

  return (
      <form onSubmit={onSubmit}>
          <label>Agrega un TODO</label>

          <textarea onChange={onChange}
              placeholder="Escribe la wea que se ocurra"
          ></textarea>
          <div className='TodoForm-buttonContainer'>
          <button
            type="button"
            className='TodoForm-button-cancel'
            onClick={onCancel}
          >Cancelar</button>
          <button
            className='TodoForm-button-add'
            type="submit"
          >Añadir</button>

          </div>
      </form>
  )
}

export {TodoForm};