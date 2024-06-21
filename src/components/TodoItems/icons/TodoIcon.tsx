import { FaCheck as Check } from "react-icons/fa6";
import { TiDeleteOutline as Delete } from "react-icons/ti"; 


type TodoIconType = {
    type: 'complete' | 'delete';
    className: 'complete' | 'delete';
    onAction: (id:number)=> void; 
    id: number;
}

type IconsType = {
    'complete': JSX.Element,
    'delete': JSX.Element
}

const TodoIcon = ({ type, id, onAction }: TodoIconType) => {

    const iconTypes: IconsType = {
        'complete': <Check 
                className={type}
                onClick={()=>{
                    onAction(id);
                    
                }}
            />,
        'delete': <Delete 
                className={type}
                onClick={()=>{
                    onAction(id);
                }}
            />
    }

    return iconTypes[type];
}

export { TodoIcon }