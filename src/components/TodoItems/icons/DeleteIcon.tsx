import { TodoIcon } from './TodoIcon';

type CheckIconType = {
    className: 'complete' | 'delete', 
}

const DeleteIcon = ({ className }: CheckIconType) => {
    return (
        <TodoIcon
            type={className} 
            className={className}
        />
    )
}

export { DeleteIcon }