import { useState } from "react";
import { Todo } from "../App";
type LocalStorageType = [items: Todo[], saveItems: (newItems: Todo[]) => void]


const useLocalStorage = (itemName: string, initialValue: string): LocalStorageType => {

    let parsedItems: any = JSON.parse(localStorage.getItem(itemName) || initialValue); //Parceamos la información que vino del localStorage

    const [items, setItems] = useState(parsedItems); //Creamos un estado para guardar y actualizar la data al momento de asignarle un valor a setItems;

    const saveItems = (newItems: any) => {
        localStorage.setItem(itemName, JSON.stringify(newItems));
        setItems(newItems);
    } //Esta función se encarga de guardar en el localStorage y actualizar el estado;

    return [items, saveItems]; //retorna el nuevo estado y la función que se comunica con el actualizador del estado;
} //custom hook

export { useLocalStorage }