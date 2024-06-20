import { FaCheck as Check } from "react-icons/fa6";
import { TiDeleteOutline as Delete } from "react-icons/ti";

type TodoIconType = {
    type: 'complete' | 'delete';
    className: 'complete' | 'delete';
}

type IconsType = {
    'complete': JSX.Element,
    'delete': JSX.Element
}

const TodoIcon = ({ type }: TodoIconType) => {

    const iconTypes: IconsType = {
        'complete': <Check className={type}/>,
        'delete': <Delete className={type}/>
    }

    return iconTypes[type];
}

export { TodoIcon }