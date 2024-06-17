import './todo-title.scss';

type TodoTitleProps = {
  totalTodos: number,
  completedTodos: number
}

function TodoTitle({ completedTodos, totalTodos }: TodoTitleProps) {
  return (
    <h1>Has completado <span>{completedTodos}</span> tareas de <span>{totalTodos}</span></h1>
  )
} 

export { TodoTitle }