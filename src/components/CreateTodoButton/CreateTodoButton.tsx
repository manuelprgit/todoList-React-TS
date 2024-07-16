import './CreateTodoButton.scss'
import { Todo } from '../../App';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

type CreateTodoButtonType = {
    saveTodos: (todos: Todo[]) => void;
    listOfTodos: Todo[]
}

function CreateTodoButton(/* { onRefresh, todoList }: CreateTodoButtonType */) { 
    const {
        saveTodos,
        listOfTodos
    } = useContext(TodoContext)

    return (
        <button 
            type="button"
            onClick={()=>{
                saveTodos(listOfTodos)
            }}
        >+</button>
    )
}

export { CreateTodoButton }