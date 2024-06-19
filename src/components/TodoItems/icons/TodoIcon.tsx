import { FaCheck as Check } from "react-icons/fa6";
import { TiDeleteOutline as Delete } from "react-icons/ti";

type TodoIconType = {
    type: 'check' | 'delete';
}

type IconsType = {
    'check': JSX.Element,
    'delete': JSX.Element
}

const TodoIcon = ({ type }: TodoIconType) => {

    const iconTypes: IconsType = {
        'check': <Check />,
        'delete': <Delete />
    }

    return iconTypes[type];
}

export { TodoIcon }