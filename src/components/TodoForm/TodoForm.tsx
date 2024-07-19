import { useContext } from 'react'
import { TodoContext } from '../TodoContext/TodoContext'
import './TodoForm.scss'

type TodoFormContext = {
    setOpenModal: () => void,
    addTodo: string
}

const TodoForm = () => {

    

    const {
        setOpenModal,
        addTodo
    } = useContext(TodoContext)

    return (
        <form onSubmit={(e) => {
            console.log(e);

        }}>
            <label htmlFor="">Crear nuevo TODO</label>

            <textarea
                name="todoText"
                placeholder="Escribir nuevo TODO"
                required
            ></textarea>

            <div className="button-content">
                <button
                    onClick={(e) => {
                        setOpenModal(false)
                    }}
                    className='btn btn-danger'
                >
                    Cerrar
                </button>

                <button
                    type='submit'
                    className='btn btn-success'
                    onClick={(e) => {
                        e.preventDefault();
                        let textInput: HTMLTextAreaElement | null = document.querySelector('textarea');
                        if(textInput){ 
                            addTodo(textInput.value);
                            textInput.value = '';   
                        }
                    }}
                >
                    Añadir
                </button>

            </div>

        </form>
    )
}

export { TodoForm }