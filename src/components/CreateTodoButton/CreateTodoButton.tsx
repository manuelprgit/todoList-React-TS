import './CreateTodoButton.scss'
type Todo = {
    id: number;
    description: string;
    completed: boolean;
}

type CreateTodoButtonType = {
    onRefresh: (todos: Todo[]) => void;
    todoList: Todo[]
}

function CreateTodoButton({ onRefresh, todoList }: CreateTodoButtonType) {
    return (
        <button 
            type="button"
            onClick={()=>{
                onRefresh(todoList)
            }}
        >+</button>
    )
}

export { CreateTodoButton }