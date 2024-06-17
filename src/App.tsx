import { TodoTitle } from "./components/TodoTitle/TodoTitle";
import { TodoInput } from "./components/TodoInput/TodoInput";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItems } from "./components/TodoItems/TodoItems";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";

import { listOfTodos } from "./helpers/todo-list";

import './main.scss';
import { useState } from "react";

const App = () => {

  const [searchValue, setSearchValue] = useState('');

  const [todos, setTodos] = useState(listOfTodos)

  let totalTodos = todos.length; //Como esta variable es el resultado de un useState, se conoce como una variable de estado derivado
  let completedTodos = todos.filter(todo => 
    !!todo.completed //Al negarla doblemente lo que se devuelve automaticamente se vuelve verdadero. Si devuelve un string, numero > 0, [], {}... eso se convertira en true
  ).length;  //Variable derivada
  
  const filterTodos = todos.filter(todo => {
    let searchedValue = searchValue.toLowerCase();
    let todoDescription = todo.description.toLocaleLowerCase();
    return todoDescription.includes(searchedValue);
  });
   
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
        {filterTodos.map(todo => <TodoItems
          key={todo.id}
          todoId={todo.id}
          completed={todo.completed}
          description={todo.description}
        />)}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App