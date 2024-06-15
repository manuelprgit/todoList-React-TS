import { TodoTitle } from "./components/TodoTitle/TodoTitle";
import { TodoInput } from "./components/TodoInput/TodoInput";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItems } from "./components/TodoItems/TodoItems";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";

import { listOfTodos } from "./helpers/todo-list";

import './main.scss';

const App = () => {

  let completedTodos = listOfTodos.filter(todo => todo.completed).length;
  let totalTodos = listOfTodos.length;

  return (
    <>
      <TodoTitle completed={completedTodos} totalTodos={totalTodos}/>
      <TodoInput />
      <TodoList>
        {listOfTodos.map(todo=> <TodoItems 
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