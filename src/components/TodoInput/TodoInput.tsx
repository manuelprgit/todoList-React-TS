
import { Dispatch, SetStateAction } from 'react';
import './TodoInput.scss'

type SearchTodo = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>
}

function TodoInput( {searchValue, setSearchValue} : SearchTodo) {
  return (
    <input 
      type="text" 
      placeholder="Ingresar tarea" 
      value={searchValue}
      onChange={ e =>{
        setSearchValue(e.target.value);  
      }}
    />
  )
}

export { TodoInput }