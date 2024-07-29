import './CreateTodoButton.scss'

type CreateTodoButtonType = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateTodoButton({ setOpenModal }: CreateTodoButtonType) {

    return (
        <button
            type="button"
            className='btn-todo-form'
            onClick={() => {
                setOpenModal((state: boolean) => !state);
            }}
        >+</button>
    )
}

export { CreateTodoButton }