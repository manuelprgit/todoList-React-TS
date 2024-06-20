import { TodoIcon } from './TodoIcon';

type CheckIconType = {
    className: 'complete' | 'delete', 
}

const CheckIcon = ({ className }: CheckIconType) => {
    return (
        <TodoIcon
            type={className}
            className={className}
        />
    )
}

export { CheckIcon }