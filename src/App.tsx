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

//TODO: TERMINAR ESTA FUNCION
const useLocalStorage = (itemName: string, initialValue: string): any => {

  let parsedItems: string = JSON.parse(localStorage.getItem(itemName) || initialValue);

  const [items, setItems] = useState(parsedItems);

  const saveItems = (newItems: Todo[]) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(JSON.stringify(newItems));
  }

}
//TODO: TERMINAR ESTA FUNCION

const App = () => {

  const [searchValue, setSearchValue] = useState('');

  const [todos, setTodos] = useState((): Todo[] => JSON.parse(localStorage.getItem('TODOS_V1') || '[]'));

  let totalTodos = todos.length; //Como esta variable es el resultado de un useState, se conoce como una variable de estado derivado

  let completedTodos = todos.filter(todo =>
    !!todo.completed //Al negarla doblemente lo que se devuelve automáticamente se vuelve verdadero. Si devuelve un string, numero > 0, [], {}... eso se convertira en true
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