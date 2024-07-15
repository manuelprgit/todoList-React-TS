import { createContext, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Todo } from "../../App";

const TodoContext = createContext({});

const TodoProvider = ({children}: any) => {

    const [searchValue, setSearchValue] = useState('');

    const {
      items: todos, 
      saveItems: setTodos,
      loading,
      error
    } = useLocalStorage('TODOS_V1', []);
  
    let totalTodos = todos.length; //Como esta variable es el resultado de un useState, se conoce como una variable de estado derivado
  
    let completedTodos = todos.filter(todo =>
      !!todo.completed //Al negar doblemente lo que se devuelve automáticamente se vuelve verdadero. Si devuelve un string, numero > 0, [], {}... eso se convertirá en true
    ).length;  //Variable derivada
  
    const filteredTodos = todos.filter(todo => {
      let searchedValue = searchValue.toLocaleLowerCase();
      let todoDescription = todo.description.toLowerCase();
      return todoDescription.includes(searchedValue);
    })
  
    const saveTodos = (newTodos: Todo[]) => {
      localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
      setTodos(newTodos);
    }
  
    const completeTodos = (id: number): void => {
      const index = todos.findIndex(todo => todo.id === id)
      const newTodosArrays = [...todos];
      const todoSelected = newTodosArrays[index];
      (todoSelected.completed)
        ? newTodosArrays[index].completed = false
        : newTodosArrays[index].completed = true
      saveTodos(newTodosArrays);
    }
  
    const deleteTodos = (id: number): void => {
      const index = todos.findIndex(todo => todo.id === id);
      const newTodosArrays = [...todos];
      newTodosArrays.splice(index, 1);
      saveTodos(newTodosArrays);
    }

    return(
        <TodoContext.Provider
            value={{
                totalTodos,
                completedTodos,
                searchValue,
                filteredTodos,
                loading,
                error,
                setSearchValue,
                completeTodos,
                deleteTodos,
                saveTodos,
                // listOfTodos
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export { 
    TodoContext,
    TodoProvider
}