import './TodoList.scss'
type TodoListProps = {
    children: React.ReactNode; // Add the 'children' property to the type
}
function TodoList(props: TodoListProps) {
    return (
        <ul>
            {props.children}
        </ul>
    )
}
  
export { TodoList }
