import { useContext } from 'react';
import './todo-title.scss';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoTitle() {

  const { completedTodos, totalTodos }: any = useContext(TodoContext);

  return (
    <h1>Has completado
      <span>{completedTodos}</span>
      tareas de
      <span>{totalTodos}</span>
    </h1>
  )
}

export { TodoTitle }