import './TodoList.scss'
type Todo = {
    children: React.ReactNode; // Add the 'children' property to the type
}
function TodoList(props: Todo) {
    return (
        <ul>
            {props.children}
        </ul>
    )
}
  
export { TodoList }
