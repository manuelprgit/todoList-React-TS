import { createContext, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Todo } from "../../App";
import { listOfTodos } from "../../helpers/todo-list";
 
interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}

const TodoContext = createContext({});

const TodoProvider = ({ children }: TodoProviderProps) => {

  const [searchValue, setSearchValue] = useState('');

  const {
    items: todos,
    saveItems: setTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

  let totalTodos = todos.length; // Como esta variable es el resultado de un useState, se conoce como una variable de estado derivado

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

  const addTodo = (todoText: string) => {

    let lastTodo = todos[todos.length - 1];  
    const newTodo: Todo = {
      id: (lastTodo) ? lastTodo.id + 1 : 1,
      description: todoText,
      completed: false
    }
    saveTodos([...todos, newTodo]);
  }

  const [openModal, setOpenModal] = useState(false);

  return (
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
        addTodo,
        deleteTodos,
        saveTodos,
        listOfTodos,
        openModal,
        setOpenModal
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