type TodoItemsTypes = {
    todoId: number;
    completed: boolean;
    description: string;
}

function TodoItems({completed, todoId, description}: TodoItemsTypes) {
    return (
        <li 
            data-todo-id={todoId}
            data-completed={completed}
        >
            <span>v</span>
            <p>{description}</p>
            <span>X</span>
        </li>
    )
}

export { TodoItems };