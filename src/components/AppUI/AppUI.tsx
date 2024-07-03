import { Dispatch, SetStateAction } from "react";
import { TodoTitle } from "../TodoTitle/TodoTitle";
import { TodoInput } from "../TodoInput/TodoInput";
import { TodoList } from "../TodoList/TodoList";
import { TodoItems } from "../TodoItems/TodoItems";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { TodosEmpty } from '../TodosEmpty/TodosEmpty';

import { Todo } from "../../App";

interface AppUIProps {
    completedTodos: number;
    totalTodos: number;
    searchValue: string;
    filteredTodos: Todo[];
    listOfTodos: Todo[];
    loading: boolean;
    error: boolean
    setSearchValue: Dispatch<SetStateAction<string>>;
    completeTodos: (id: number) => void;
    deleteTodos: (id: number) => void;
    saveTodos: (newTodos: Todo[]) => void
}

const AppUI = ({
    completedTodos,
    totalTodos,
    searchValue,
    filteredTodos,
    listOfTodos,
    loading,
    error,
    setSearchValue,
    completeTodos,
    deleteTodos,
    saveTodos,
}: AppUIProps) => {
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
                {(loading) && <TodosLoading />}
                {(error) && <TodosError />}
                {(!loading && filteredTodos.length === 0) && <TodosEmpty />}
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