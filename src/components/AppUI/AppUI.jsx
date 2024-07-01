import { TodoTitle } from "../TodoTitle/TodoTitle";
import { TodoInput } from "../TodoInput/TodoInput";
import { TodoList } from "../TodoList/TodoList";
import { TodoItems } from "../TodoItems/TodoItems";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";

const AppUI = ({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    filteredTodos,
    completeTodos,
    deleteTodos,
    saveTodos,
    listOfTodos,
    loading,
    error,
}) => { 
    return (
        <>
            <TodoTitle
                completedTodos={completedTodos}
                totalTodos={totalTodos}
            />
            <TodoInput
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
                {loading && <p>Cargando...</p>}
                {error && <p>Error al cargar la lista de Todo's</p>}
                {(!loading && filteredTodos.length === 0) && <p>¡Crea tu primer TODO!</p>}
                {filteredTodos.map(todo => <TodoItems
                    key={todo.id}
                    todoId={todo.id}
                    completed={todo.completed}
                    description={todo.description}
                    onComplete={completeTodos}
                    onDelete={deleteTodos}
                />)}
            </TodoList>
            <CreateTodoButton
                onRefresh={saveTodos}
                todoList={listOfTodos}
            />
        </>
    )
}

export { AppUI }