import { TodoIcon } from './TodoIcon';

type CheckIconType = {
    className: 'complete' | 'delete',
    onClick: (todoId: number) => void,
    id: number
}

const CheckIcon = ({ className, onClick, id }: CheckIconType) => {
    return (
        <TodoIcon
            type={className}
            className={className}
            onAction={onClick}
            id={id}
        />
    )
}

export { CheckIcon }