import './TodoItems.scss'

type TodoItemsTypes = {
    todoId: number;
    completed: boolean;
    description: string;
}

function TodoItems({ completed, todoId, description }: TodoItemsTypes) {
    return (
        <li
            data-todo-id={todoId}
            data-completed={completed}
            className={(completed) ? 'completed' : ''}
        >
            <span className='complete'>v</span>
            <p>{description}</p>
            <span className='delete'>X</span>
        </li>
    )
}

export { TodoItems };