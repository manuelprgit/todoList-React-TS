const TodoForm = () => {
    return(
        <form>
            <label htmlFor="">Crear nuevo TODO</label>
            <textarea 
                name=""
                placeholder="Escribir nuevo TODO"    
            ></textarea>
            <button>Cerrar</button>
            <button>Añadir</button>
        </form>
    )
}

export {TodoForm}