import { useContext } from 'react'
import { TodoContext } from '../TodoContext/TodoContext'
import './TodoForm.scss'
 

const TodoForm = () => {
    const { 
        setOpenModal, 
        addTodo 
    }: any = useContext(TodoContext)
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
                    onClick={() => {
                        setOpenModal((state:any) => !state)
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