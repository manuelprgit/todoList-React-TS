import { useEffect, useState } from "react";
import { Todo } from "../App";

type LocalStorageType = {
    items: Todo[],
    saveItems: (newItems: Todo[]) => void,
    loading: boolean,
    error: boolean
}

const useLocalStorage = (itemName: string, initialValue: Todo[]): LocalStorageType => {

    const [items, setItems] = useState(initialValue); //Creamos un estado para guardar y actualizar la data al momento de asignarle un valor a setItems;
    const [loading, setLoading] = useState(true); //Creamos un estado para saber si la data está cargando;
    const [error, setError] = useState(false); //Creamos un estado para saber si hubo un error;

    let parsedItems: any;
    useEffect(() => {
        try {
            parsedItems = JSON.parse(
                localStorage.getItem(itemName) || JSON.stringify(initialValue)
            ); //Parceamos la información que vino del localStorage
            setLoading(false);
        } catch (error) {
            setError(true);
        }
    }, []);

    const saveItems = (newItems: any) => {
        localStorage.setItem(itemName, JSON.stringify(newItems));
        setItems(newItems);
    } //Esta función se encarga de guardar en el localStorage y actualizar el estado;
    return {
        items,
        saveItems,
        loading,
        error
    }; //retorna el nuevo estado y la función que se comunica con el actualizador del estado;

} //custom hook

export { useLocalStorage }