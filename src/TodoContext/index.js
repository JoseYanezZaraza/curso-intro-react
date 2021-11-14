import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){
  const [
    todos,
    saveTodo,
    loading,
    error,
  ] = useLocalStorage('TODOS_V1', []);
  
  const [searchValue, setSearchState] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => todo.completed).length;

  let searchedTodos = [];
  if (searchValue.length < 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      return todoText.includes(searchValue.toLowerCase());
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    let newTodoList = [...todos];
    newTodoList[todoIndex].completed = !newTodoList[todoIndex].completed;
    saveTodo(newTodoList)
  };

  const addTodo = (text) => {
    let newTodoList = [...todos];
    newTodoList.push({
      text,
      completed: false
    });
    saveTodo(newTodoList)
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    let newTodoList = [...todos];
    newTodoList.splice(todoIndex, 1);
    saveTodo(newTodoList);
  };

  React.useEffect(()=> {
    console.log('use efect')
  }, [todos.length]);
  return (
      <TodoContext.Provider value={{
        loading,
        error, 
        searchedTodos,
        completed: completedTodos,
        todos,
        total: todos.length,
        searchValue,
        setSearchState,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo
      }}>
          {props.children}
      </TodoContext.Provider>
  );

}

export {TodoContext, TodoProvider};