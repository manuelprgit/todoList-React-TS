import { useState } from "react";

import { AppUI } from "./components/AppUI/AppUI"; 

import { useLocalStorage } from "./hooks/useLocalStorage";
import { listOfTodos } from "./helpers/todo-list";

import './main.scss';
import { TodoProvider } from "./components/TodoContext/TodoContext";

export type Todo = {
  id: number;
  description: string;
  completed: boolean;
}
 
const App = () => { 

  return (
    <TodoProvider>
      <AppUI
        // loading={loading}
        // error={error}
        // completedTodos={completedTodos}
        // totalTodos={totalTodos}
        // searchValue={searchValue}
        // setSearchValue={setSearchValue}
        // filteredTodos={filteredTodos}
        // completeTodos={completeTodos}
        // deleteTodos={deleteTodos}
        // saveTodos={saveTodos}
        // listOfTodos={listOfTodos}
      />
    </TodoProvider>
  )
}

export default App