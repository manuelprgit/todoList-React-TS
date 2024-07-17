import './CreateTodoButton.scss'
import { Todo } from '../../App';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

type CreateTodoButtonType = {
    saveTodos: (todos: Todo[]) => void;
    listOfTodos: Todo[]
}

function CreateTodoButton({setOpenModal}/* { onRefresh, todoList }: CreateTodoButtonType */) { 

    // const {
    //     saveTodos,
    //     listOfTodos
    // } = useContext(TodoContext)

    return (
        <button 
            type="button"
            className='btn-todo-form'
            onClick={()=>{ 
                setOpenModal(state => !state);
            }}
        >+</button>
    )
}

export { CreateTodoButton }