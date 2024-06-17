import { TodoTitle } from "./components/TodoTitle/TodoTitle";
import { TodoInput } from "./components/TodoInput/TodoInput";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItems } from "./components/TodoItems/TodoItems";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";

import { listOfTodos } from "./helpers/todo-list";

import './main.scss';
import { useState } from "react";

const App = () => {

  const [todos, setTodos] = useState(listOfTodos);

  const [
    searchValue, //!Estado
    setSearchValue //!Función que actualiza el estado.
  ] = useState(''); //!El estado debe de empezar con un valor inicial

  let completedTodos = todos.filter(todo => todo.completed).length;
  let totalTodos = todos.length;

  return (
    <>
      <TodoTitle
        completed={completedTodos}
        totalTodos={totalTodos}
      />
      <TodoInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {listOfTodos.map(todo => <TodoItems
          key={todo.id}
          todoId={todo.id}
          completed={todo.completed}
          description={todo.description}
          // setTodos={setTodos}
        />)}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App