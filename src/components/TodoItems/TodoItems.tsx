import './TodoItems.scss'
import { CheckIcon } from './icons/CheckIcon';
import { DeleteIcon } from './icons/DeleteIcon';

type TodoItemsTypes = {
    todoId: number;
    completed: boolean;
    description: string;
    onComplete: (id: number) => void;
    onDelete: (id: number) => void;
}

function TodoItems({
    completed,
    todoId,
    description,
    onComplete,
    onDelete
}: TodoItemsTypes) {
    return (
        <li
            data-completed={completed}
            className={`loader-container ${(completed) ? 'completed' : ''}`}
        >
            <CheckIcon
                className='complete'
                onClick={onComplete}
                id={todoId}
            />
            <p>{description}</p>
            <DeleteIcon
                className='delete'
                onDelete={onDelete}
                id={todoId}
            />
        </li>
    )
}

export { TodoItems };