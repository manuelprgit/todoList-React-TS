import { useState } from "react";

import { TodoTitle } from "./components/TodoTitle/TodoTitle";
import { TodoInput } from "./components/TodoInput/TodoInput";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItems } from "./components/TodoItems/TodoItems";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
 
import { listOfTodos } from "./helpers/todo-list";

import './main.scss';

export type Todo = {
  id: number;
  description: string;
  completed: boolean;
}


type LocalStorageType = [items: Todo[], saveItems: (newItems: Todo[]) => void]

const useLocalStorage = (itemName: string, initialValues: string): LocalStorageType => {

  let initialValue: any = JSON.parse(localStorage.getItem(itemName) || initialValues);//Parceamos la información que vino del localStorage

  const [items, setItems] = useState(initialValue);//Creamos un estado para guardar y actualizar la data al momento de asignarle un valor a setItems;

  const saveItems = (newItems: any) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(newItems);
  }//Esta función se encarga de guardar en el localStorage y actualizar el estado;

  return [items, saveItems];//retorna el nuevo estado y la función que se comunica con el actualizador del estado;
}//custom hook

const App = () => {

  const [searchValue, setSearchValue] = useState('');

  const [todos, setTodos] = useLocalStorage('TODOS_V1', JSON.stringify(listOfTodos));

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

  return (
    <>
      <TodoTitle
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      />
      <TodoInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {filteredTodos.map(todo => <TodoItems
          key={todo.id}
          todoId={todo.id}
          completed={todo.completed}
          description={todo.description}
          onComplete={completeTodos}
          onDelete={deleteTodos}
        />)}
      </TodoList>
      <CreateTodoButton
        onRefresh={saveTodos}
        todoList={listOfTodos}
      />
    </>
  )
}

export default App