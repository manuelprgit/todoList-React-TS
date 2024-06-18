import './TodoItems.scss'
import { FaCheck, FaCircleXmark } from "react-icons/fa6";


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
            <FaCheck
                className='complete'
                onClick={() => {
                    onComplete(todoId);
                }}
            />
            <p>{description}</p>
            <FaCircleXmark 
                className='delete'
                onClick={() => {
                    onDelete(todoId);
                }}
            />
        </li>
    )
}

export { TodoItems };