import { useContext } from 'react';
import './todo-title.scss';
import { TodoContext } from '../TodoContext/TodoContext';

type TodoTitleProps = {
  totalTodos: number,
  completedTodos: number
}

function TodoTitle() { 

  const { completedTodos, totalTodos } = useContext(TodoContext)
   

  return (    
      // (completedTodos === totalTodos)
      //   ? <h1>FELICIDADES!!! Has completado todos los TODO'S</h1>
        // : 
        <h1>Has completado <span>{completedTodos}</span> tareas de <span>{totalTodos}</span></h1> 
  )
} 

export { TodoTitle }