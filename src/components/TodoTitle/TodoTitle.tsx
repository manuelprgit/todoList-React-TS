import './todo-title.scss';

type TodoTitleProps = {
  totalTodos: number,
  completed: number
}

function TodoTitle({ totalTodos, completed }: TodoTitleProps) {
  return (
    <h1>Has completado <span>{completed}</span> tareas de <span>{totalTodos}</span></h1>
  )
}

export { TodoTitle }