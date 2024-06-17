import { Dispatch, SetStateAction } from 'react';
import './TodoInput.scss'

type SearchValues = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>
}

function TodoInput({
  searchValue,
  setSearchValue
}: SearchValues) {
  return (
    <input
      type="text"
      placeholder="Ingresar tarea"
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
      value={searchValue} //!El valor del input ahora esta atado al valor que le envié searchValue del useState
    />
  )
}

export { TodoInput }