 
import { AppUI } from "./components/AppUI/AppUI";  

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
      />
    </TodoProvider>
  )
}

export default App