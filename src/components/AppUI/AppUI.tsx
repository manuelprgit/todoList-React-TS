import { useContext } from "react";

import { TodoTitle } from "../TodoTitle/TodoTitle";
import { TodoInput } from "../TodoInput/TodoInput";
import { TodoList } from "../TodoList/TodoList";
import { TodoItems } from "../TodoItems/TodoItems";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { TodosEmpty } from '../TodosEmpty/TodosEmpty';
import { TodoContext } from "../TodoContext/TodoContext";
import { Modal } from "../../helpers/components/Modal";
import { TodoForm } from "../TodoForm/TodoForm";
import { Todo } from '../../App';
 

const AppUI = () => {

    const {
        filteredTodos,
        loading,
        error,
        openModal,
        setOpenModal,
        completeTodos,
        deleteTodos,
    }: any = useContext(TodoContext);
    return (
        <>
            <TodoTitle />
            <TodoInput />
            <TodoContext.Consumer>
                {() => (
                    <TodoList>
                        {(loading) && <TodosLoading />}
                        {(error) && <TodosError />}
                        {(!loading && filteredTodos.length === 0) && <TodosEmpty />}
                        {filteredTodos.map((todo: Todo) => <TodoItems
                            key={todo.id}
                            todoId={todo.id}
                            completed={todo.completed}
                            description={todo.description}
                            onComplete={completeTodos}
                            onDelete={deleteTodos}
                        />)}
                    </TodoList>
                )}
            </TodoContext.Consumer>
            <CreateTodoButton setOpenModal={setOpenModal} />
            {openModal &&
                <Modal>
                    <TodoForm />
                </Modal>
            }
        </>
    )
}

export { AppUI }