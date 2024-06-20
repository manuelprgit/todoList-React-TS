import { TodoIcon } from './TodoIcon';

type CheckIconType = {
    className: 'complete' | 'delete',
    onDelete: (id:number)=> void,
    id:number
}

const DeleteIcon = ({ className, onDelete, id }: CheckIconType) => {
    return (
        <TodoIcon
            type={className} 
            className={className}
            onAction={onDelete}
            id={id}
        />
    )
}

export { DeleteIcon }