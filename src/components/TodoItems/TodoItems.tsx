import { Dispatch, SetStateAction } from 'react';
import './TodoItems.scss'

type TodoItemsTypes = {
    todoId: number;
    completed: boolean;
    description: string;
    // setTodos: Dispatch<SetStateAction<string>>
}

function TodoItems({ completed, todoId, description, /* setTodos */ }: TodoItemsTypes) {
    return (
        <li
            data-todo-id={todoId}
            data-completed={completed}
            className={(completed) ? 'completed' : ''}
        >
            <span 
                className='complete'
                onClick={() => {
                    
                }}
            >v</span>
            <p>{description}</p>
            <span className='delete'>X</span>
        </li>
    )
}

export { TodoItems };