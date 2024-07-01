import './CreateTodoButton.scss'
import { Todo } from '../../App';

type CreateTodoButtonType = {
    onRefresh: (todos: Todo[]) => void;
    todoList: Todo[]
}

function CreateTodoButton({ onRefresh, todoList }: CreateTodoButtonType) {
    return (
        <button 
            type="button"
            onClick={()=>{
                onRefresh(todoList)
            }}
        >+</button>
    )
}

export { CreateTodoButton }