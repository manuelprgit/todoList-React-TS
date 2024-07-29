
import { useContext } from 'react';
import './TodoInput.scss'
import { TodoContext } from '../TodoContext/TodoContext';

// type SearchTodo = {
//   searchValue: string;
//   setSearchValue: Dispatch<SetStateAction<string>>
// }

function TodoInput( /* {searchValue, setSearchValue} : SearchTodo */) {

  const {
    searchValue,
    setSearchValue
  }:any = useContext(TodoContext);
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