import { useContext } from 'react'
import { TodoContext } from '../TodoContext/TodoContext'
import './TodoForm.scss'

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
            ></textarea>
            <div className="button-content">
                <button
                    onClick={(e) => {
                        setOpenModal(state => !state)
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
                        addTodo(document.querySelector('textarea')?.value);
                    }}
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }