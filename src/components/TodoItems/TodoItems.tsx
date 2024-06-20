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
            className={(completed) ? 'completed' : ''}
        >
            <div
                onClick={() => {
                    onComplete(todoId);
                }}
            > 
                <CheckIcon className='complete'/>
            </div>
            <p>{description}</p>
            <div
                onClick={() => {
                    onDelete(todoId);
                }}
            >
            <DeleteIcon className='delete'/>

            </div>
        </li>
    )
}

export { TodoItems };