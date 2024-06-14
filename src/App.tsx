import { TodoTitle } from "./components/TodoTitle";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { TodoItems } from "./components/TodoItems";
import { CreateTodoButton } from "./components/CreateTodoButton";

import { listOfTodos } from "./helpers/todo-list";

const App = () => {
  return (
    <>
      <TodoTitle />
      <TodoInput />
      <TodoList>
        <TodoItems />
        <TodoItems />
        <TodoItems />
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App