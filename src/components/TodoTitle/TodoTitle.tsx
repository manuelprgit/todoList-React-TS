import './todo-title.scss';

type TodoTitleProps = {
  totalTodos: number,
  completedTodos: number
}

function TodoTitle({ completedTodos, totalTodos }: TodoTitleProps) {
  return (    
      // (completedTodos === totalTodos)
      //   ? <h1>FELICIDADES!!! Has completado todos los TODO'S</h1>
        // : 
        <h1>Has completado <span>{completedTodos}</span> tareas de <span>{totalTodos}</span></h1> 
  )
} 

export { TodoTitle }