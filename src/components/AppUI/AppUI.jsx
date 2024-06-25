const AppUI = () => { 
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