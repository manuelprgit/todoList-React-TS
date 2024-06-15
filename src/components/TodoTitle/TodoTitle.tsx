import './todo-title.scss';

type TodoTitleProps = {
  totalTodos: number,
  completed: number
}

function TodoTitle({ totalTodos, completed }: TodoTitleProps) {
  return (
    <h1>Has completado {completed} tareas de {totalTodos}</h1>
  )
}

export { TodoTitle }